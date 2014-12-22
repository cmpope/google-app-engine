import os
import urllib
import json
from datetime import date
from datetime import datetime

from google.appengine.api import users
from google.appengine.ext import ndb

import jinja2
import webapp2

template_dir = os.path.join(os.path.dirname(__file__), 'templates')

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(template_dir),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)


DEFAULT_GUESTBOOK_NAME = 'default_guestbook'

# We set a parent key on the 'Greetings' to ensure that they are all in the same
# entity group. Queries across the single entity group will be consistent.
# However, the write rate should be limited to ~1/second.

def guestbook_key(guestbook_name=DEFAULT_GUESTBOOK_NAME):
    """Constructs a Datastore key for a Guestbook entity with guestbook_name."""
    return ndb.Key('Guestbook', guestbook_name)

class Greeting(ndb.Model):
    """Models an individual Guestbook entry."""
    author = ndb.UserProperty()
    content = ndb.StringProperty(indexed=False)
    date = ndb.DateTimeProperty(auto_now_add=True)

class Lead(ndb.Model):
  first_name = ndb.StringProperty()
  last_name = ndb.StringProperty()
  email_address = ndb.StringProperty()

class Test(ndb.Model):
    test_content = ndb.StringProperty()
    date = ndb.DateTimeProperty(auto_now_add=True)

class Employee(ndb.Model):
    first_name = ndb.StringProperty()
    last_name = ndb.StringProperty()
    job_title = ndb.StringProperty()
    start_date = ndb.DateProperty()
    #tenure = ndb.ComputedProperty(lambda self: date.today() - self.start_date)


class Employees(webapp2.RequestHandler):
    def get(self):
        employees_query = Employee.query()
        employees = employees_query.fetch(10)

        template_values = {
            'employees': employees,
        }

        template = JINJA_ENVIRONMENT.get_template('employees.html')
        self.response.write(template.render(template_values))


class AddEmployee(webapp2.RequestHandler):
    def post(self):
        employee = Employee()

        employee.first_name = self.request.get('first_name')
        employee.last_name = self.request.get('last_name')
        employee.email_address = self.request.get('email_address')
        employee.job_title = self.request.get('job_title')
        start_date = self.request.get('start_date')
        start_date = datetime.strptime(start_date, '%Y-%m-%d')
        start_date = datetime.combine(start_date, datetime.min.time())
        employee.start_date = start_date
        print (employee)
        employee.put()

        self.redirect('/employees')


###### ('/') - MainPage ######

class MainPage(webapp2.RequestHandler):
    def get(self):
        guestbook_name = self.request.get('guestbook_name',
                                          DEFAULT_GUESTBOOK_NAME)
        greetings_query = Greeting.query(
            ancestor=guestbook_key(guestbook_name)).order(-Greeting.date)
        greetings = greetings_query.fetch(10)
        content_query = Test.query().order(-Test.date)
        contents = content_query.fetch(10)

        if users.get_current_user():
            url = users.create_logout_url(self.request.uri)
            url_linktext = 'Logout'
        else:
            url = users.create_login_url(self.request.uri)
            url_linktext = 'Login'

        template_values = {
            'greetings': greetings,
            'guestbook_name': urllib.quote_plus(guestbook_name),
            'url': url,
            'url_linktext': url_linktext,
            'contents': contents,
        }

        template = JINJA_ENVIRONMENT.get_template('index.html')
        self.response.write(template.render(template_values))


######  ('/sign')   -   Guestbook   ######

class Guestbook(webapp2.RequestHandler):
    def post(self):
        # We set the same parent key on the 'Greeting' to ensure each Greeting
        # is in the same entity group. Queries across the single entity group
        # will be consistent. However, the write rate to a single entity group
        # should be limited to ~1/second.
        guestbook_name = self.request.get('guestbook_name',
                                          DEFAULT_GUESTBOOK_NAME)
        greeting = Greeting(parent=guestbook_key(guestbook_name))

        if users.get_current_user():
            greeting.author = users.get_current_user()

        greeting.content = self.request.get('content')
        greeting.put()

        query_params = {'guestbook_name': guestbook_name}
        self.redirect('/?' + urllib.urlencode(query_params))


class ReturnJSON(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'application/json'   
        obj = {
            'html': '<p>Hello World</p>', 
        } 
        self.response.out.write(json.dumps(obj))

######  ('/submit')     -   TestHandler     #######

class TestHandler(webapp2.RequestHandler):
    def post(self):
        content = Test()
        content.test_content = self.request.get('test')
        content.put()
        self.redirect('/')


#######     ('/slider')     -   SliderTest  #######

class SliderTest(webapp2.RequestHandler):
    def get(self):
        template_values = {
        }

        template = JINJA_ENVIRONMENT.get_template('slider.html')
        self.response.write(template.render(template_values))


application = webapp2.WSGIApplication([
    ('/', MainPage),
    ('/sign', Guestbook),
    ('/submit', TestHandler),
    ('/slider', SliderTest),
    ('/returnjson', ReturnJSON),
    ('/employees', Employees),
    ('/addemployee', AddEmployee)
], debug=True)