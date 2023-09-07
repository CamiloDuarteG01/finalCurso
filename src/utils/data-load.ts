import { Producto } from 'src/utils/producto';
import { Receta } from 'src/utils/receta';
import { Restaurante } from 'src/utils/restaurante';
import { CategoriasAlimentos } from './recursos';
import{Paises} from './recursos';
import {CulturaGastronomica} from './culturaGastronomica';


export const LIBRARY_PRODUCTOS: Producto[] = [];

LIBRARY_PRODUCTOS.push(new Producto("Sashimi de Salmón",CategoriasAlimentos.PescadoMariscos,"Sashimi de salmón fresco","El sashimi es una preparación de pescado crudo en la cocina japonesa, y el salmón es una elección popular."));
LIBRARY_PRODUCTOS.push(new Producto("Espaguetis",CategoriasAlimentos.GranosCereales,"Deliciosa pasta italiana","Los espaguetis son una pasta larga y delgada, originaria de Italia, que se sirve en una gran variedad de salsas."))
LIBRARY_PRODUCTOS.push(new Producto( "Aceite de Oliva Extra Virgen",CategoriasAlimentos.CondimentosSalsas,"Aceite de oliva de alta calidad","El aceite de oliva extra virgen se utiliza en la cocina italiana y mediterránea para realzar los sabores."))
LIBRARY_PRODUCTOS.push(new Producto("Miso",CategoriasAlimentos.CondimentosSalsas,"Pasta de miso japonés","El miso es un condimento tradicional japonés hecho de soja fermentada, sal y a menudo otros ingredientes."))
LIBRARY_PRODUCTOS.push(new Producto("Wasabi",CategoriasAlimentos.CondimentosSalsas,"Pasta de miso japonés","El miso es un condimento tradicional japonés hecho de soja fermentada, sal y a menudo otros ingredientes."))
LIBRARY_PRODUCTOS.push(new Producto("Queso",CategoriasAlimentos.Lacteos,"Pasta de miso japonés","El miso es un condimento tradicional japonés hecho de soja fermentada, sal y a menudo otros ingredientes."))
LIBRARY_PRODUCTOS.push(new Producto("Arroz",CategoriasAlimentos.GranosCereales,"Pasta de miso japonés","El miso es un condimento tradicional japonés hecho de soja fermentada, sal y a menudo otros ingredientes."))

export const LIBRARY_RECETAS: Receta[] = [];
LIBRARY_RECETAS.push(new Receta( 'Pizza Margarita','Una pizza clásica con salsa de tomate, mozzarella fresca, albahaca y aceite de oliva.','imagen-pizza-margarita.jpg','Instrucciones detalladas sobre cómo hacer una deliciosa pizza Margarita en casa.'));
LIBRARY_RECETAS.push(new Receta( 'Lasaña','Capas de pasta intercaladas con carne, salsa de tomate y queso ricotta, cubiertas con mozzarella y horneadas.','imagen-lasagna.jpg','Instrucciones para preparar una lasaña casera deliciosa.'));
LIBRARY_RECETAS.push(new Receta('Sushi de Salmón','Rollos de sushi con salmón fresco, arroz y alga nori.','imagen-sushi.jpg','Instrucciones detalladas para hacer sushi de salmón en casa.'));
LIBRARY_RECETAS.push(new Receta( 'Sashimi de Salmón','Finas láminas de salmón crudo servidas con salsa de soja y wasabi.','imagen-sashimi.jpg','Instrucciones para hacer sashimi de salmón.'));
LIBRARY_RECETAS.push(new Receta( 'Ramen de Cerdo','Fideos en caldo de cerdo con huevo y cebolla verde.','imagen-ramen.jpg','Cómo preparar un delicioso ramen de cerdo.'));


export const LIBRARY_RESTAURANTES: Restaurante[] = [];
LIBRARY_RESTAURANTES.push(new Restaurante('Ristorante Italiano',Paises.Italia,'Roma',5,'2022-05-15',["Italiana"]));
LIBRARY_RESTAURANTES.push(new Restaurante('La Casa della Pasta',Paises.Italia,'Roma',5,'2022-05-15',["Italiana"]));
LIBRARY_RESTAURANTES.push(new Restaurante( 'Sushi Master',Paises.Japón,'Tokio',4.8,'2022-06-01',["Japonesa"]));
LIBRARY_RESTAURANTES.push(new Restaurante( 'Omnia',Paises.Japón,'Tokio',4.8,'2022-06-01',["Japonesa","Italiana"]));

export const LIBRARY_CULTURES: CulturaGastronomica []= [];


LIBRARY_CULTURES.push(new CulturaGastronomica("Italiana","descripcion de Italia",[Paises.Italia]))
LIBRARY_CULTURES.push(new CulturaGastronomica("Japonesa","descripcion de Japonesa",[Paises.Japón]))

//LIBRARY_CULTURES[0].addPais(Paises.Italia)
//LIBRARY_CULTURES[1].addPais(Paises.Japón)

LIBRARY_CULTURES[0].addReceta(LIBRARY_RECETAS[0])
LIBRARY_CULTURES[0].addReceta(LIBRARY_RECETAS[1])
LIBRARY_CULTURES[1].addReceta(LIBRARY_RECETAS[2])
LIBRARY_CULTURES[1].addReceta(LIBRARY_RECETAS[3])
LIBRARY_CULTURES[1].addReceta(LIBRARY_RECETAS[4])

LIBRARY_CULTURES[0].addRestaurante(LIBRARY_RESTAURANTES[0])
LIBRARY_CULTURES[0].addRestaurante(LIBRARY_RESTAURANTES[1])
LIBRARY_CULTURES[1].addRestaurante(LIBRARY_RESTAURANTES[2])
LIBRARY_CULTURES[1].addRestaurante(LIBRARY_RESTAURANTES[3])

LIBRARY_CULTURES[0].addProduto(LIBRARY_PRODUCTOS[1])
LIBRARY_CULTURES[0].addProduto(LIBRARY_PRODUCTOS[2])
LIBRARY_CULTURES[0].addProduto(LIBRARY_PRODUCTOS[5])
LIBRARY_CULTURES[0].addProduto(LIBRARY_PRODUCTOS[6])
