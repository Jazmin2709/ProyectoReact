// Array de objetos de artistas.
// Esta información normalmente vendría de una Base de Datos o una API externa, 
// pero aquí la simulamos exportando un archivo con datos estáticos de prueba.
export const artists = [
  {
    id: 1, // Identificador único, crucial para la prop 'key' en React al momento de hacer el .map()
    nombre: "Vincent van Gogh",
    profesion: "Pintor",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1024px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    descripcion: "Pintor postimpresionista holandés, famoso por su uso expresivo del color y su técnica de pinceladas gruesas, autor de 'La Noche Estrellada'.",
    color: "#e11d48" // Usaremos este color para darle un toque visual diferente (acento) a la tarjeta
  },
  {
    id: 2,
    nombre: "Frida Kahlo",
    profesion: "Pintora",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/800px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg",
    descripcion: "Pintora mexicana conocida por sus icónicos autorretratos, su profunda conexión con la cultura popular y sus obras que exploran la identidad.",
    color: "#2563eb"
  },
  {
    id: 3,
    nombre: "Ludwig van Beethoven",
    profesion: "Compositor",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Beethoven.jpg/800px-Beethoven.jpg",
    descripcion: "Compositor, director de orquesta y pianista alemán. Su legado musical es un pilar fundamental en la historia de la música occidental.",
    color: "#16a34a"
  },
  {
    id: 4,
    nombre: "Annie Leibovitz",
    profesion: "Fotógrafa",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Annie_Leibovitz_2011.jpg/800px-Annie_Leibovitz_2011.jpg",
    descripcion: "Reconocida fotógrafa estadounidense que ha capturado retratos memorables e íntimos de algunas de las figuras más influyentes del mundo.",
    color: "#d97706"
  },
  {
    id: 5,
    nombre: "Leonardo da Vinci",
    profesion: "Polímata",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leonardo_self.jpg/800px-Leonardo_self.jpg",
    descripcion: "Pintor, anatomista, arquitecto, botánico, científico y mucho más. El epítome del hombre del Renacimiento italiano.",
    color: "#9333ea"
  },
  {
    id: 6,
    nombre: "Jimi Hendrix",
    profesion: "Músico",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Jimi_Hendrix_1967_uncropped.jpg/800px-Jimi_Hendrix_1967_uncropped.jpg",
    descripcion: "Guitarrista, cantante y compositor. Es ampliamente considerado como uno de los guitarristas eléctricos más influyentes de la historia del rock.",
    color: "#0d9488"
  }
];
