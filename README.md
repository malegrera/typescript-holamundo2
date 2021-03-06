https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

https://desarrolloweb.com/articulos/configurar-proyecto-typescript.html

```
{
  "compilerOptions": {
    "target": "es5", //versión de js a la que queremos compilar
    "outDir": "dist", //directorio donde irán los archivos .js
    "rootDir": "src" //archivos fuente .ts
  }
}  
```
Lanzar el watcher (tsc -w)  

Terminal --> Ejecutar tarea de compilación (Ctrl+Mays+B) -->tsc:inspección:tsconfig.json  

Otras opciones del fichero:  
```
{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true //null y undefined tienes sus propios tipos
  }
}
```
Array de nombres de archivo o patrones para incluir en el programa  
{
  "include": ["src/**/*", "tests/**/*"]
}

*coincide con cero o más caracteres (excluyendo los separadores de directorio)
?coincide con cualquier carácter (excluyendo los separadores de directorio)
**/coincide con cualquier directorio anidado en cualquier nivel

Le dice a TypeScript que guarde información sobre el gráfico del proyecto de la última compilación en archivos almacenados en el disco. Esto crea una serie de .tsbuildinfoarchivos en la misma carpeta que su salida de compilación.
Esta configuración le permite especificar un archivo para almacenar información de compilación incremental como parte de proyectos compuestos, lo que permite una creación más rápida de bases de código de TypeScript más grandes.  
{
 "incremental": true,
 "tsBuildInfoFile": "./buildcache"
}

permite una amplia gama de comportamientos de verificación de tipos que dan como resultado mayores garantías de corrección del programa  
{
  "strict": true
}


En algunos casos en los que no hay anotaciones de tipo, TypeScript recurrirá a un tipo de anypara una variable cuando no pueda inferir el tipo.  
{
    noImplicitAny: true
}

Establece el sistema de módulos para el programa. Consulte la página de referencia de Módulos para obtener más información. Es muy probable que desee "CommonJS"proyectos de nodo.  
{
    module: "CommonJS"
}
Muestra los nombres de los ficheros.  
{
 "explainFiles": true
}

https://code.visualstudio.com/docs/typescript/typescript-debugging  
La depuración de TypeScript admite mapas fuente de JavaScript.   
Para generar mapas de origen para sus archivos TypeScript,   
compile con la opción --sourcemap opción o establezca la propiedad sourceMap en el    
archivo tsconfig.json en true.  
