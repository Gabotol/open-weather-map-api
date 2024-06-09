# open-weather-map-api
Se consume el api de OpenWeatherMap para construir una aplicacion que compara los datos de temperatura, presipitacion e indice uv de hasta 5 capitales de mexico

Para poder ejecutar el proyecto sigue las siguientes instrucciones basicas
1.-Clonar el proyecto en tu maquina
2.-En la ruta del proyecto clonado ejecuta npm install o usar npm install --force si falla la instalacion normal
3.-Comienza a ejecutar el proyecto con npm start
4.-puedes ejecutar npm test para correr los test jest

Para el proyecto utilizamos react con una estructura de componentes, vistas y paginas. Con la ayuda de styled-components creamos cada componente en una carpeta de uso general para la aplicacion o de uso local para cada componente, de esta forma aseguramos que los componentes basicos puedan ser reutilizados en toda la app, con cada componente de styled components se construyen los componentes, los componentes son el conjunto de los elementos basicos que pueden construir por ejemplo un label y un select para dar forma a un filtro, una vez que tenemos un conjunto de componentes podemos countruir las vistas, en las vistas tenemos la union de html y ts con el tsx de react, es aqui donde agregamos la reutilizacion de componentes y agregamos la logica deseada para la funcionalidad de cada componente, una vez que tenemos las vistas las podemos juntar para armar las paginas, las paginas con accedidas desde el router de react y es la pagina que finalmente vemos en el navegador.
por ejemplo, en la ruta "/" de nuestra app podemos ver la siguiente pagina:
![image](https://github.com/Gabotol/open-weather-map-api/assets/91835413/4912da23-6ee5-4301-a092-8c1c25bdf7ca)
que tambien tiene su modo noche
![image](https://github.com/Gabotol/open-weather-map-api/assets/91835413/dda19b78-a7ce-4f54-8495-df0d8202582a)
cuando damos click en empezar nos envia a la parte donde podemos ver las graficas
![image](https://github.com/Gabotol/open-weather-map-api/assets/91835413/5eb69188-9092-4fe2-9380-00cbf9ff363b)
resultado despues de los filtros
![image](https://github.com/Gabotol/open-weather-map-api/assets/91835413/6535fe4c-0a84-407d-81b5-ff5221eeaa84)
imagenes generales del responsive
![image](https://github.com/Gabotol/open-weather-map-api/assets/91835413/f559a23a-5ff0-463f-8bdb-7427b6dcb828)
![image](https://github.com/Gabotol/open-weather-map-api/assets/91835413/b23c3371-e0b8-4ded-a5e0-0a3345e6cebd)
![image](https://github.com/Gabotol/open-weather-map-api/assets/91835413/1c619d37-e38f-4090-849f-3a308afb2fb2)
![image](https://github.com/Gabotol/open-weather-map-api/assets/91835413/6807e08c-c6da-41f2-9b0b-ca43351c708e)
NOTA IMPORTANTE:
PROBLEMAS CONOCIDOS
El api de OpenWeatherMap tiene restricciones de fechas a siempre mostrar datos del dia de ayer en adelante, pero si ya es despues de las 6 de la tarde muestra los datos a partir del dia de hoy, este problema se puede contener facilmente limitando las fechas en el filtro, sin embargo y para demostracion de la contecion de este error el input de fecha se deja sin limitantes para la demostracion, en un proyecto rel limitaria las fechas en el rango permitido





