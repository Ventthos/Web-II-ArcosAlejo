from datetime import datetime
import json
from django.http import JsonResponse
from django.shortcuts import get_object_or_404, render
from .models import Eventos, Boletos, Localidad, Productos
from django.utils.timezone import now

def parseEventos(eventosPrev):
    eventos = []

    for evento in eventosPrev:
        evento_dict = {
            "id": evento.id,
            "nombre": evento.name,
            "contenido": "Curabitur vehicula eros at metus interdum, sed dictum enim fringilla. Ut faucibus sem euismod dui facilisis, at sollicitudin justo pharetra.",
            "imagen": "https://img.freepik.com/vector-gratis/patron-carnaval-brasileno-diseno-plano_23-2148811693.jpg?t=st=1740720734~exp=1740724334~hmac=46ffceba54f133084e981e411ce9e4656b98741580e180f4df2229456f17d8da&w=900",
            "fecha_inicio": evento.fecha_inicio.strftime("%Y-%m-%d %H:%M"),
            "fecha_fin": evento.fecha_fin.strftime("%Y-%m-%d %H:%M"),
            "localidad": evento.localidad_id.name
        }
        eventos.append(evento_dict)
    return eventos

def parseBoletos(boletosPrev):
    boletos = []
    for boleto in boletosPrev:
        boleto_dict = {
            "precio": boleto.precio,
            "tipo_boleto": boleto.tipo_boleto_id.name,
            "evento": boleto.evento_id.name,
            "fecha": boleto.fecha,
            "localidad": boleto.evento_id.localidad_id.name,
            "imagen": "https://img.freepik.com/vector-gratis/vector-dos-entradas-cine-disenadas-cerca-vista-superior-aislada-sobre-fondo-blanco_1284-47320.jpg?t=st=1740762968~exp=1740766568~hmac=142918579462580f2a950898ee522620383097bda4ed77daa1e5fde169ce361b&w=996"
        }
        boletos.append(boleto_dict)
    return boletos

# Create your views here.
def index(request):

    noticias = [
        {
            "titulo": "Noticia impresionante",
            "contenido": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac vestibulum lorem, sed fermentum odio. Ut iaculis nibh id tincidunt tristique. Duis et orci venenatis massa feugiat faucibus.",
            "imagen": "https://img.freepik.com/vector-gratis/fondo-carnaval-mardi-gras_23-2148052684.jpg?t=st=1740719360~exp=1740722960~hmac=e721352ea1986fad9d21f5ac6074f912a4cdb8bd282e952c11f29db1e25496af&w=900"
        },
        {
            "titulo": "Otra noticia impactante",
            "contenido": "Aliquam erat volutpat. Phasellus vitae sapien scelerisque, ullamcorper risus ac, scelerisque ligula.",
            "imagen": "https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-carnaval-brasileno_23-2148818897.jpg?t=st=1740719500~exp=1740723100~hmac=b433e80b6076c97e858dd5963ae73083c6bc3639e45f38a9f9f4a720ef775bee&w=900"
        }
    ]

    eventosPrev = Eventos.objects.all().order_by('-id')

    eventos = parseEventos(eventosPrev)
    data = {
        "noticias": noticias,
        "eventos": eventos,  
    }
    

    return render(request, 'examen/index.html', data)


def eventosPage(request):
    eventosPrev = Eventos.objects.all().order_by('-id')
    eventos = parseEventos(eventosPrev)
    data = {
        "eventos": eventos, 
    }
    return render(request, 'examen/eventos.html', data)


def boletosPage(request):
    boletosPrev = Boletos.objects.all().order_by('-id')
    
    boletos = parseBoletos(boletosPrev)
    data = {
        "boletos": boletos,
    }
    return render(request, 'examen/boletos.html', data)

def boletosEvento(request, Evento_id):
    evento = get_object_or_404(Eventos, id=Evento_id) 
    boletosPrev = Boletos.objects.filter(evento_id=evento)
    boletos = parseBoletos(boletosPrev)

    data = {
        "evento": evento,
        "boletos": boletos
    }
    return render(request, "examen/boletos.html", data)


def addEventoPage(request):
    localidades = Localidad.objects.all()

    data = {
        "localidades": localidades,
    }

    return render(request, "examen/agregarEvento.html", data)


def validar_evento(body):
    name = body.get("name")
    fecha_inicio_str = body.get("fecha_inicio")
    fecha_fin_str = body.get("fecha_fin")
    localidad_id = body.get("localidad_id")

    if not all([name, fecha_inicio_str, fecha_fin_str, localidad_id]):
        return None, JsonResponse({"message": "Faltan datos", "status": "error"}, status=400)

    try:
        fecha_inicio = datetime.strptime(fecha_inicio_str, "%Y-%m-%dT%H:%M")
        fecha_fin = datetime.strptime(fecha_fin_str, "%Y-%m-%dT%H:%M")
        fecha_hoy = datetime.now()
        lastEvent = Eventos.objects.last()

        if fecha_inicio < fecha_hoy:
            return None, JsonResponse({"message": "La fecha de inicio debe ser mayor a la actual", "status": "error"}, status=400)
        elif fecha_fin < fecha_inicio:
            return None, JsonResponse({"message": "La fecha de fin debe ser mayor a la de inicio", "status": "error"}, status=400)
        elif lastEvent and int(localidad_id) == lastEvent.localidad_id.id:
            return None, JsonResponse({"message": "No se pueden agregar dos eventos seguidos en la misma localidad", "status": "error"}, status=400)

        return {
            "name": name,
            "fecha_inicio": fecha_inicio,
            "fecha_fin": fecha_fin,
            "localidad_id": localidad_id
        }, None

    except ValueError:
        return None, JsonResponse({"message": "Formato de fecha inválido", "status": "error"}, status=400)

def create_event(request):
    
    body = json.loads(request.body.decode('utf-8'))
    datos_evento, error = validar_evento(body)

    if error:
        return error

    localidad = get_object_or_404(Localidad, id=datos_evento["localidad_id"])
    
    evento = Eventos(
            name=datos_evento["name"],
            fecha_inicio=datos_evento["fecha_inicio"],
            fecha_fin=datos_evento["fecha_fin"],
            localidad_id=localidad
            )
    evento.save()

    return JsonResponse({
        "user": {
            "name": evento.name,
            "fecha_inicio": evento.fecha_inicio,
            "fecha_fin": evento.fecha_fin,
            "localidad": evento.localidad_id.name
        },
        "message": "Evento creado",
        "status": "success"
    })

def delete_event(request):
    
    body = json.loads(request.body.decode('utf-8'))
    event_id = body.get("id")

    evento = get_object_or_404(Eventos, id=event_id)
    evento.delete()

    return JsonResponse({"message": "Evento eliminado", "status": "success"})

def get_events(request):
    
    eventosPrev = Eventos.objects.all().order_by('-id')
    eventos = parseEventos(eventosPrev)

    return JsonResponse({
        "eventos": eventos,
        "message": "Eventos obtenidos",
        "status": "success"
    })

def eventManagement(request):
    try:
        if request.method == "POST":
            return create_event(request)
        elif request.method == "DELETE":
            return delete_event(request)
        elif request.method == "GET":
            return get_events(request)
        else:
            return JsonResponse({"message": "Método no permitido", "status": "error"}, status=405)
    except Exception as e:
        return JsonResponse({"message": str(e), "status": "error"}, status=500)
    
def productosPage(request):
    localidades = Localidad.objects.all()
    data = {
        "localidades": localidades,
    }
    return render(request, 'examen/agregarProducto.html', data)


def create_product(request):
    body = json.loads(request.body.decode('utf-8'))
    name = body.get("name")
    precio = body.get("precio")
    localidad_id = body.get("localidad_id")

    fechaActual = now().date()
    productosHoyCant = Productos.objects.filter(created_at__date=fechaActual).count()

    if not all([name, precio, localidad_id]):
        return JsonResponse({"message": "Faltan datos", "status": "error"}, status=400)
    elif float(precio) <= 0:
        return JsonResponse({"message": "El precio debe ser mayor a 0", "status": "error"}, status=400)
    elif productosHoyCant >= 10:
        return JsonResponse({"message": "No se pueden agregar más de 10 productos al día", "status": "error"}, status=400)


    try:
        localidad = get_object_or_404(Localidad, id=localidad_id)
        producto = Productos(name=name, precio=precio, localidad_id=localidad, created_at=datetime.now())
        producto.save()
        return JsonResponse({"message": "Producto creado", "status": "success"})
    except Exception as e:
        return JsonResponse({"message": str(e), "status": "error"}, status=500)

def delete_product(request):
    body = json.loads(request.body.decode('utf-8'))
    product_id = body.get("id")

    producto = get_object_or_404(Productos, id=product_id)
    producto.delete()

    return JsonResponse({"message": "Producto eliminado", "status": "success"})

def get_products(request):
    productos = Productos.objects.all().order_by('-id')
    productos_list = []

    for producto in productos:
        producto_dict = {
            "id": producto.id,
            "name": producto.name,
            "precio": producto.precio,
            "localidad": producto.localidad_id.name,
            "created_at": producto.created_at.strftime("%Y-%m-%d %H:%M")
        }
        productos_list.append(producto_dict)

    return JsonResponse({"productos": productos_list, "message": "Productos obtenidos", "status": "success"})

def productManagement(request):
    try:
        if request.method == "POST":
            return create_product(request)
        elif request.method == "DELETE":
            return delete_product(request)
        elif request.method == "GET":
            return get_products(request)
    except Exception as e:
        return JsonResponse({"message": str(e), "status": "error"}, status=500)