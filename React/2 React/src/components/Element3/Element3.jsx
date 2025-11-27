import './Element3.css'

export function Element3 (){

  function jsxCode1(){
    return(
      <h3>True jsxCode1</h3>
    )
  }
  function jsxCode2(){
    return(
      <h3>False jsxCode2</h3>
    )
  }

  const bol = false

  const fruits = [
  "Apple", "Banana", "Orange", "Pear", "Peach", "Plum", "Grape", "Cherry", "Strawberry", "Blueberry",
  "Raspberry", "Blackberry", "Pineapple", "Mango", "Papaya", "Kiwi", "Watermelon", "Cantaloupe", "Lemon", "Lime",
  "Grapefruit", "Tangerine", "Apricot", "Nectarine", "Pomegranate", "Coconut", "Fig", "Date", "Guava", "Lychee",
  "Avocado", "Tomato", "Cucumber", "Carrot", "Potato", "Onion", "Garlic", "Pepper", "Broccoli", "Cauliflower",
  "Cabbage", "Lettuce", "Spinach", "Kale", "Zucchini", "Eggplant", "Pumpkin", "Sweet Potato", "Radish", "Beet",
  "Turnip", "Parsnip", "Celery", "Asparagus", "Artichoke", "Leek", "Green Bean", "Pea", "Corn", "Okra",
  "Chili Pepper", "Bell Pepper", "Swiss Chard", "Arugula", "Bok Choy", "Brussels Sprouts", "Butternut Squash", "Acorn Squash", "Fennel", "Ginger",
  "Turmeric", "Horseradish", "Rhubarb", "Starfruit", "Dragonfruit", "Durian", "Persimmon", "Passion Fruit", "Tamarind", "Sapote",
  "Kumquat", "Mulberry", "Jackfruit", "Custard Apple", "Soursop", "Plantain", "Cranberry", "Elderberry", "Gooseberry", "Boysenberry",
  "Chayote", "Jicama", "Yam", "Cassava", "Endive", "Watercress", "Mustard Greens", "Collard Greens", "Seaweed", "Bamboo Shoot"
];

const fruitsObj = {
  apple: "apple",
  banana: "banana",
  orange: "orange",
  pear: "pear",
  peach: "peach",
  plum: "plum",
  grape: "grape",
  cherry: "cherry",
  strawberry: "strawberry",
  blueberry: "blueberry",
  raspberry: "raspberry",
  blackberry: "blackberry",
  pineapple: "pineapple",
  mango: "mango",
  papaya: "papaya",
  kiwi: "kiwi",
  watermelon: "watermelon",
  cantaloupe: "cantaloupe",
  lemon: "lemon",
  lime: "lime",
  grapefruit: "grapefruit",
  tangerine: "tangerine",
  apricot: "apricot",
  nectarine: "nectarine",
  pomegranate: "pomegranate",
  coconut: "coconut",
  fig: "fig",
  date: "date",
  guava: "guava",
  lychee: "lychee",
  avocado: "avocado",
  tomato: "tomato",
  cucumber: "cucumber",
  carrot: "carrot",
  potato: "potato",
  onion: "onion",
  garlic: "garlic",
  pepper: "pepper",
  broccoli: "broccoli",
  cauliflower: "cauliflower",
  cabbage: "cabbage",
  lettuce: "lettuce",
  spinach: "spinach",
  kale: "kale",
  zucchini: "zucchini",
  eggplant: "eggplant",
  pumpkin: "pumpkin",
  sweet_potato: "sweet_potato",
  radish: "radish",
  beet: "beet",
  turnip: "turnip",
  parsnip: "parsnip",
  celery: "celery",
  asparagus: "asparagus",
  artichoke: "artichoke",
  leek: "leek",
  green_bean: "green_bean",
  pea: "pea",
  corn: "corn",
  okra: "okra",
  chili_pepper: "chili_pepper",
  bell_pepper: "bell_pepper",
  swiss_chard: "swiss_chard",
  arugula: "arugula",
  bok_choy: "bok_choy",
  brussels_sprouts: "brussels_sprouts",
  butternut_squash: "butternut_squash",
  acorn_squash: "acorn_squash",
  fennel: "fennel",
  ginger: "ginger",
  turmeric: "turmeric",
  horseradish: "horseradish",
  rhubarb: "rhubarb",
  starfruit: "starfruit",
  dragonfruit: "dragonfruit",
  durian: "durian",
  persimmon: "persimmon",
  passion_fruit: "passion_fruit",
  tamarind: "tamarind",
  sapote: "sapote",
  kumquat: "kumquat",
  mulberry: "mulberry",
  jackfruit: "jackfruit",
  custard_apple: "custard_apple",
  soursop: "soursop",
  plantain: "plantain",
  cranberry: "cranberry",
  elderberry: "elderberry",
  gooseberry: "gooseberry",
  boysenberry: "boysenberry",
  chayote: "chayote",
  jicama: "jicama",
  yam: "yam",
  cassava: "cassava",
  endive: "endive",
  watercress: "watercress",
  mustard_greens: "mustard_greens",
  collard_greens: "collard_greens",
  seaweed: "seaweed",
  bamboo_shoot: "bamboo_shoot"
};

  return(
    <>
      <h2 className='testClassForEl3'>Element 3</h2>
      {1+1}
      <br />
      {'test'.toUpperCase()}
      <br />
      <span className={'test'} style={{color: 'red'}}>{100 + 11}</span>
      {'test'}
      {12341234}
      {
        // for (let index = 0; index < array.length; index++) {
        //   const element = array[index];
        // }
      }
      {
        // for (const element of object) {
        // }
      }
      {
        // for (const key in object) {
        //   if (!Object.hasOwn(object, key)) continue;
        //   const element = object[key];
        // }
      }
      {
        // while (condition) {
        // }
      }
      {
        // if (condition) {
         // }
      }
      {
        // switch (key) {
        //   case value:
        //     break;
        //   default:
        //     break;
        // }
      }
      {/* {jsxCode1()}
      {jsxCode2()} */}

      {bol ? jsxCode1() : jsxCode2()}

      <ol>
        {fruits.map((fruit, index)=>(
          <li key={index}>{fruit}</li>
        ))}
      </ol>
        <hr/>
      <ol>
        {Object.keys(fruitsObj).map((el, index)=> (
          <li key={index}>{el}:{fruitsObj[el]}</li>
        ))}
      </ol>
      
      
    </>
  )
}