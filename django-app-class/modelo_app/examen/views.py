from django.shortcuts import render
from .models import Eventos, Boletos

def parseEventos(eventosPrev):
    eventos = []

    for evento in eventosPrev:
        evento_dict = {
            "nombre": evento.name,
            "contenido": "Curabitur vehicula eros at metus interdum, sed dictum enim fringilla. Ut faucibus sem euismod dui facilisis, at sollicitudin justo pharetra.",
            "imagen": "https://img.freepik.com/vector-gratis/patron-carnaval-brasileno-diseno-plano_23-2148811693.jpg?t=st=1740720734~exp=1740724334~hmac=46ffceba54f133084e981e411ce9e4656b98741580e180f4df2229456f17d8da&w=900",
            "fecha_inicio": evento.fecha_inicio,
            "fecha_fin": evento.fecha_fin,
            "localidad": evento.localidad_id.name
        }
        eventos.append(evento_dict)
    return eventos

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

    eventosPrev = Eventos.objects.all()

    eventos = parseEventos(eventosPrev)
    data = {
        "noticias": noticias,
        "eventos": eventos,  
    }
    

    return render(request, 'examen/index.html', data)


def eventosPage(request):
    eventosPrev = Eventos.objects.all()
    eventos = parseEventos(eventosPrev)
    data = {
        "eventos": eventos, 
    }
    return render(request, 'examen/eventos.html', data)


def boletosPage(request):
    boletosPrev = Boletos.objects.all()
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

    data = {
        "boletos": boletos,
    }
    return render(request, 'examen/boletos.html', data)