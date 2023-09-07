
// ciudades-paises.ts

// Enum con los países de América Latina y Europa
export enum Paises {
  Argentina = 'Argentina',
  Brasil = 'Brasil',
  Colombia = 'Colombia',
  España = 'España',
  Francia = 'Francia',
  Italia = 'Italia',
  México = 'México',
  Perú = 'Perú',
  Líbano = 'Líbano',
  Tailandia='Tailandia',
  Japón='Japón'

}

// Objeto que relaciona países con sus ciudades (múltiples ciudades)
export const CiudadesPorPais: Record<Paises, string[]> = {
  [Paises.Argentina]: ['Buenos Aires', 'Córdoba', 'Rosario'],
  [Paises.Brasil]: ['Río de Janeiro', 'Sao Paulo', 'Brasilia'],
  [Paises.Colombia]: ['Bogotá', 'Medellín', 'Cali'],
  [Paises.México]: ['Ciudad de México', 'Guadalajara', 'Monterrey'],
  [Paises.Perú]: ['Lima', 'Arequipa', 'Cusco'],
  // Los países de Europa pueden tener múltiples ciudades
  [Paises.España]: ['Madrid', 'Barcelona', 'Valencia'],
  [Paises.Francia]: ['París', 'Marsella', 'Lyon'],
  [Paises.Italia]: ['Roma', 'Milán', 'Nápoles'],
  // Agregar países con un arreglo vacío si no tienes ciudades definidas
  [Paises.Líbano]: [],
  [Paises.Tailandia]: [],
  [Paises.Japón]: []
   }



//console.log(`Ciudades en Argentina: ${obtenerCiudades(Paises.Argentina).join(', ')}`);



function obtenerCiudad(pais: Paises): string[] {
  return CiudadesPorPais[pais] || [];
}

export enum CategoriasAlimentos {
  CondimentosSalsas = "Condimentos y Salsas",
  Verduras = "Verduras",
  Especias = "Especias",
  Carnes = "Carnes",
  Lacteos = "Lácteos",
  GranosCereales = "Granos y Cereales",
  Frutas = "Frutas",
  Bebidas = "Bebidas",
  DulcesPostres = "Dulces y Postres",
  PescadoMariscos ="cosas del mar",
  Otros = "Otros",
}


export const culturaGastronomica = {
  Italiana: 'Italiana',
  Colombiana: 'Colombiana',
  Japonesa: 'Japonesa',
  Mexicana: 'Mexicana',
  Francesa: 'Francesa',
  China: 'China',
  Española: 'Española',
  Peruana: 'Peruana',
  India: 'India',
  Tailandesa: 'Tailandesa',
  Argentina: 'Argentina',
  Brasileña: 'Brasileña',
  Libanesa: 'Libanesa',
  Marroquí: 'Marroquí',
  Coreana: 'Coreana',
  CajunCriolla: 'Cajún y Criolla',
  Asia:'Asia'
};


