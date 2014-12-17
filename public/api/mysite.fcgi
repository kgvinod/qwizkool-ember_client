#!/home2/qwizkool/python/bin/python
import sys, os

# Add a custom Python path.
sys.path.insert(0, "/home2/qwizkool/python/")
sys.path.insert(13, "/home2/qwizkool/work/bala/server-apps/django-rest-server/")

os.environ['DJANGO_SETTINGS_MODULE'] = 'rest_api.settings'
from django.core.servers.fastcgi import runfastcgi
runfastcgi(method="threaded", daemonize="false")
