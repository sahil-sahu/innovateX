from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


def get_ip(request):
    return render(request, 'instruct.html')


class healthView(APIView):
    def get(self, request):
        return Response({"health": True}, status=status.HTTP_201_CREATED)
