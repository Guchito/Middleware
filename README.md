# Middleware
Practica integradora de Middlewares

Objetivo 

Lograr implementar tanto middlewares propios como los vistos durante el módulo (Multer, Express Validator, Express Session, Cookie Parser).

# Desafío 1 - Registro
El tech leader de tu equipo necesita implementar el proceso de registro/login en su sitio. Tu primera tarea será registrar un usuario. El objeto del usuario dentro de la DB debería verse así:
{
	id: 1,
	email: example@example.com,
	password: $2a$10$YJNmWHie1PjNZKcUNmlq.O.3pmOUidm8w, (Password hash)
	avatar: image-example.jpg
}


Para esto:
Validaciones
El correo electrónico (email) tiene que ser obligatorio, con formato email y no puede repetirse entre los usuarios.
La contraseña (password) tiene que ser obligatoria y tener como mínimo 6 caracteres. Además debe coincidir con la que se ingrese en “Repite tu contraseña”.
El campo de repetir contraseña (retype) debe ser obligatorio.
La imagen (avatar) tiene que ser obligatoria y sólo debe admitir archivos .jpg, .png y .jpeg.
Persistencia de datos
Si los datos ingresados por el usuario son incorrectos se deberá renderizar la misma vista de registro con los datos ingresados anteriormente por el usuario (Solo el email).
Si los datos ingresados por el usuario son correctos se deberá:
Construir al objeto usuario con la password encriptada.
Guardar al usuario en la DB.
Redirigir hacia el login para continuar con el flujo.
OPCIONAL:
Separar funcionalidades del controlador como generar el id, leer el JSON, escribir el JSON o alguna otra que te pueda llegar a servir para agilizar el código. Esto podría ser en el mismo controlador o en otros archivos.
Modularizar las validaciones para que no estén todas declaradas en las rutas.

# Desafío 2 - Login
	Ahora que tenemos al usuario registrado en nuestra base de datos necesitamos darle la posibilidad de loguearse.

Para esto:
Validaciones
El campo email es obligatorio.
El usuario y contraseña no coinciden (Deberá validarse en el campo email).
Persistencia de datos
Si los datos ingresados por el usuario son incorrectos se deberá renderizar la misma vista de login con los datos ingresados anteriormente por el usuario (Solo el email).
Si los datos ingresados por el usuario son correctos se deberá:
Buscar al usuario y guardarlo en sesión.
Si el usuario marcó recordarme se deberá enviar una cookie al navegador con nombre user que contendrá el id del usuario.
OPCIONAL:
Separar funcionalidades del controlador como leer el JSON o alguna otra que te pueda llegar a servir para agilizar el código. Esto podría ser en el mismo controlador o en otros archivos.
Modularizar las validaciones para que no estén todas declaradas en las rutas.

# Desafío 3 - Middlewares propios
	Ahora que el usuario puede iniciar sesión vamos a utilizar esta información para mejorar su experiencia.

Para esto:
Crear un middleware de aplicación que chequee si el navegador nos envía una cookie llamada user. Si lo hace guardar al usuario en sesión, si no solamente continuar. Aplicarlo.
Crear un middleware de aplicación que chequee si hay un usuario en sesión. Si lo hay enviar a todas las vistas (res.locals) la información de este mismo. Aplicarlo.
Con esta información en la vista y el usuario logueado, dejar de mostrar los botones de registro/login del navbar, mostrar el email del usuario conectado y el botón de cerrar sesión. Este deberá ser un link hacia el perfil del usuario.
Completar la vista de perfil del usuario con los datos que nos brinda este middleware.
Crear un middleware de ruta que se llame Auth. Esto dejará continuar sólo a aquellos que estén logueados. En caso de no estarlo, redirigir al login. Aplicarlo en la ruta que renderiza el perfil del usuario y en la que se encarga de desloguearlo.
Crear un middleware de ruta que se llame Guest. Esto dejará continuar sólo a aquellos que aún no hayan iniciado sesión en nuestro sitio. En caso de estarlo, redirigir a la ruta “/”. Aplicarlo en la ruta que renderiza y procesa el login/registro.
	OPCIONAL:
Modularizar los middlewares

# Desafío 4 - Logout
¡Excelente trabajo!

Como última tarea necesitamos que el botón de logout en el navbar pueda destruir la sesión del usuario y redirigirlo hacia el inicio del sitio. No te olvides de eliminar la cookie.
