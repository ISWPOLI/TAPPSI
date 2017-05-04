#RUBY 

Un lenguaje de programación dinámico y de código abierto enfocado en la simplicidad y productividad. Su elegante sintaxis se siente natural al leerla y fácil al escribirla.

En Ruby, todo es un objeto. Se le puede asignar propiedades y acciones a toda información y código. La programación orientada a objetos llama a las propiedades variables de instancia y las acciones son conocidas como métodos. La orientación a objetos pura de Ruby se suele demostrar con un simple código que aplica una acción a un número.

5.times { print "Nos *encanta* Ruby -- ¡es fuera de serie!" }
En muchos lenguajes, los números y otros tipos primitivos no son objetos. Ruby sigue la influencia del lenguaje Smalltalk pudiendo poner métodos y variables de instancia a todos sus tipos de datos. Esto facilita el uso de Ruby, porque las reglas que se aplican a los objetos son aplicables a todo Ruby.

La flexibilidad de Ruby
Ruby es considerado un lenguaje flexible, ya que permite a sus usuarios alterarlo libremente. Las partes esenciales de Ruby pueden ser quitadas o redefinidas a placer. Se puede agregar funcionalidad a partes ya existentes. Ruby intenta no restringir al desarrollador.

Por ejemplo, la suma se realiza con el operador suma (+). Pero si prefieres usar la palabra sumar, puedes agregar un método llamado sumar a la clase Numeric que viene incorporada.

class Numeric
  def sumar(x)
    self.+(x)
  end
end

y = 5.sumar 6
ahora y vale 11
Los operadores de Ruby son simples conveniencias sintácticas para los métodos. Los puedes redefinir como y cuando quieras.

Los Bloques, una funcionalidad realmente expresiva
Los bloques de Ruby son también vistos como una fuente de gran flexibilidad. El desarrollador puede anexar una cláusula a cualquier método, describiendo cómo debe actuar. La cláusula es llamada bloque y se ha convertido en una de las más famosas funcionalidades para los recién llegados a Ruby que vienen de otros lenguajes imperativos como PHP o Visual Basic.

Los bloques están inspirados por los lenguajes funcionales. Matz dijo, “en las cláusulas de Ruby, quise respetar la cultura de Lisp3”.

motores_de_busqueda =
  %w[Google Yahoo MSN].map do |motor|
    "http://www." + motor.downcase + ".com"
  end
En este código, el bloque está descrito entre la construcción do ... end. El método map aplica el bloque a la lista de palabras provista. Muchos otros métodos en Ruby dejan abierta la posibilidad al desarrollador para que escriba su propio bloque describiendo los detalles de qué debe hacer ese método.

Ruby y el Mixin
A diferencia de otros lenguajes de programación orientada a objetos, Ruby se caracteriza por su intencional herencia simple. Sin embargo, Ruby incorpora el concepto de módulos (llamados categorías en Objective-C), que son colecciones de métodos.

Las clases pueden mezclar (mixin) un módulo e incorporar todos sus métodos gratuitamente. Por ejemplo, cualquier clase que implemente el método each puede incorporar el módulo Enumerable, que le agrega un conjunto de métodos que usan each para recorrer sus elementos.

class MiArray
  include Enumerable
end
En general, los Rubyistas ven esto como una forma mucho más clara de herencia múltiple, que es compleja e incluso puede ser restrictiva.

La apariencia visual de Ruby
A pesar de que Ruby utiliza la puntuación muy limitadamente y se prefieren las palabras clave en inglés, se utiliza algo de puntuación para decorar el código. Ruby no necesita declaraciones de variables. Se utilizan convenciones simples para nombrar y determinar el alcance de las mismas.

var puede ser una variable local.
@var es una variable de instancia.
$var es una variable global.
Estos detalles mejoran la legibilidad permitiendo que el desarrollador identifique fácilmente los roles de las variables. También se hace innecesario el uso del molesto self. como prefijo de todos los miembros de instancia.

#Phoenix Elixix 

Phoenix es un framework de desarrollo web escrito en Elixir, patrón MVC. Muchos de sus componentes y conceptos le resultará familiar a los que tenemos experiencia en otros framework como Ruby on Rails o Django. Phoenix ofrece lo mejor de ambos mundos - alta productividad en ambitos de desarrollo y un alto rendimiento de la aplicación.

Pero antes de seguir vamos a definir algunos conceptos:

¿ Qué es Erlang ?


Erlang es un lenguaje funcional y tiene una historia aún más larga con manejo de concurrencia. Erlang fue creado en Ericsson en la década de 1980 para permitir un mejor desarrollo de aplicaciones de telefonía. Acualmente WhatsApp tiene cientos de millones de usuarios. con más de diez mil conexiones simultáneas en una sola máquina, lo cual se ve como un gran reto , pero Whatsapp tener servidores individuales con más de 2 millones de conexiones simultáneas. 2 millones de conexiones en un solo servidor, manejados por Erlang.

Erlang también es popular para los servidores del juego. Millones de usuarios juegan con la infraestructura Erlang tález como Call of Duty y Juego de la Guerra.



¿Qué es Elixir?


Elixir creado por José Valim, comenta: “Me gustó todo lo que vi en Erlang, pero odiaba las cosas que no vi”. Elixir tiene su propio sistema de gestión de paquetes -> hex.pm.

Elixir es un lenguaje que se ejecuta en la máquina virtual de Erlang. Por lo que tiene todas las ventajas, probado en batalla y puede usar las bibliotecas existentes Erlang sin penalización en el rendimiento. Elixir y añade un montón de sutilezas. Uno de ellos es ```pipe operator``.

La diferencia entre Erlang y elixir no es sólo la sintaxis. Sin embargo, la sintaxis es importante, y especialmente para desarrolladores de Ruby la sintaxis Elixir será muy familiar.



Inmutabilidad y la programación funcional


Elixir es un lenguaje funcional con la inmutabilidad. La programación funcional es un paradigma de programación declarativa basado en el uso de funciones matemáticas, en contraste con la programación imperativa, que enfatiza los cambios de estado mediante la mutación de variables. La programación funcional tiene sus raíces en el cálculo lambda, un sistema formal desarrollado en los años 1930 para investigar la definición de función, la aplicación de las funciones y la recursión. Muchos lenguajes de programación funcionales pueden ser vistos como elaboraciones del cálculo lambda.

Me he dado cuenta de lo beneficioso que es. Incluso para la programación de un solo subproceso, mutabilidad trae una incertidumbre acerca de cómo va a ejecutar un programa. Y que no se pierda la mutabilidad en absoluto. La programación funcional y la inmutabilidad ayuda a aclarar las cosas y hace que sea más fácil de razonar sobre el código.



Concurrencia


Otro punto fuerte para Elixir es la simultaneidad. Concurrencia está aquí para quedarse, por varias razones. Para mencionar algunos: La tendencia en hardware es cada vez más núcleos de CPU. Los fabricantes de CPU no van a mejorar el rendimiento de un solo núcleo a la misma velocidad que antes. En su lugar, son la adición de más núcleos. También el mundo es concurrente y no desea que los usuarios finales u otros servicios de software que esperen innecesariamente una respuesta.

En la mayoría de los idiomas de concurrencia es un poco de dolor. No sólo es peligroso y difícil de hacer la sincronización. Con el estado mutable y bifurcación de procesos nativos también es a menudo lento y utiliza una gran cantidad de memoria.

Haciendo concurrencia en Erlang o Elixir otros idiomas es un poco como hacer ramas en Git contra la subversión . En la subversión era muy complicado de hacer - y nunca lo hice. En Git es mucho más fácil y lo hago todo el tiempo.

Bien mucho blabla y ahora un poco de acción ,para continuar vamos a necesitar instalar:

Elixir: Phoenix está escrito en Elixir, y nuestro código de la aplicación también será escrito en Elixir. No vamos a entrar ahora en una aplicación de Phoenix sin él!

Erlang: Elixir se compila a código de bytes de Erlang para ejecutar en la máquina virtual de Erlang. Sin Erlang, Elixir tiene ninguna máquina virtual para ejecutar en, por lo que necesitamos para instalar Erlang también.

* Phoenix

* Plug, Cowboy, and Ecto

* node.js (>= 5.0.0)

* PostgreSQL

Ahora vamos a montar nuestro entorno de desarrollo para poder trabajar con este hermoso framework que mucho promete, lo primero sera instalar elixir:

Para instalar elixir en Mac OS X lo vamos hacer mediante Homebrew
