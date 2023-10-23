# Antes de iniciar

> **Note**: Asegúrate de tener instalado el ambiente de desarrollo para correr aplicaciones en la versión 0.72 de React Native. Puedes seguir el siguiente tutorial: [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) _Es de suma importancia tener la versión mas reciente de Xcode y Android Studio, ya que en caso contrario se pueden presentar errores._

## Paso 1: Clonar el repositorio

Puedes descargar directamente el repositorio desde la opción de Code -> Donwload ZIP o utilizando el siguiente comando desde tu terminal:

```bash
git clone https://github.com/devalexr/FraguaChallange.git
```

## Paso 2: Instalar dependencias

Una vez descargado el repositorio debemos instalar todas las dependencias necesarias. Para ello utilizaremos el gestor de paquetes **yarn**

Asegúrate de que en tu terminal te encuentras en la raíz del repositorio

```bash
# Ingresar al proyecto desde la terminal
cd ruta/al/repositorio

# Instalar las dependencias con yarn
yarn install
```

> **Note**: Este proceso puede tomar algunos minutos. se paciente.

## Paso 3: Instalar Pods (iOS)

Los **Pods** son librerías necesarias para correr la aplicación en el ambiente de iOS, asegúrate de instalarlos con el siguiente comando:

```bash
# Sin salir de la terminal, ingresa a la carpeta ios
cd ios

# Instalar las dependencias con el comando "pod install"
pod install

# Regresa a la raíz del repositorio
cd ..
```

> **Note**: Este proceso puede tomar algunos minutos. se paciente.

## Paso 4: Crear el archivo .env

Asegúrate de crear el archivo de las variables de entorno ya que este es sumamente importante para el funcionamiento correcto de la aplicación.
Puedes consultar la estructura del **.env** en el archivo **.env.example** incluido en el repositorio.

```bash
UNSPLASH_API_URL=https://api.unsplash.com
UNSPLASH_API_KEY_ACCESS=xxxxxx
AXIOS_REQUEST_TIMEOUT=5000;
```

> **Note**: Asegúrate de conseguir tu [Unsplash Access Key] en (https://unsplash.com/developers) y remplazarlo por el valor de UNSPLASH_API_KEY_ACCESS dentro del archivo .env

## Paso 5: Iniciar la aplicación

Para correr la aplicación ejecuta el siguiente comando para _Android_ o _iOS_:

### Para Android

```bash
yarn android
```

### Para iOS

```bash
yarn ios
```

> **Note**: Este proceso puede llevar varios minutos la primera vez que intentas correr la aplicación ya que instalara todas las dependencias necesarias y levantara los emuladores. Se paciente, Si todo está configurado _correctamente_, debería ver la aplicación ejecutándose en su _Emulador de Android_ o _Simulador de iOS_ en breve, siempre que haya configurado su emulador/simulador correctamente.

Esta es una forma de ejecutar la aplicación - también puede ejecutarla directamente desde Android Studio y Xcode respectivamente.

## Hasta aquí todo debería funcionar! :tada:

¡Lo has logrado! Ya puedes utilizar y modificar la aplicación :partying_face:

## Testing

Para correr los test debes de seguir los siguientes comandos:

```bash
# Ingresar al proyecto desde la terminal
cd ruta/al/repositorio

# Correr los test:
yarn run test
```
