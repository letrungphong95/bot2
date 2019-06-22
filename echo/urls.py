from django.conf.urls import include, url 
from . import views

# urlpatterns = [ 
#     url(r'^chat/$', views.chat, name='chat'),
#     url(r'^$', views.index, name='index'),
# ]
urlpatterns = [
    url(r'^$', views.chat, name='chat')
]

