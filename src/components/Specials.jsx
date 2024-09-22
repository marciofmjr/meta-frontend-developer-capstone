import { IoMdCart } from 'react-icons/io';
import { Link } from 'react-router-dom';
import ImageBruschettaSalad from './../images/bruschetta.png';
import ImageGreekSalad from './../images/greek-salad.png';
import ImageLemonDessert from './../images/lemon-dessert.png';

function SpecialCard(props) {
  return (
    <div id="specialsSection" className="w-full rounded-lg bg-lime-100 overflow-hidden hover:scale-110 transition-all">
      <img src={props.image} alt={props.title} className="h-72 w-full object-cover object-center" />
      <div className="flex flex-col gap-4 px-8 py-8">
        <h4 className="text-2xl font-bold text-lime-700">{props.title}</h4>
        <p className="text-base text-gray-600">
          Labore aliquip sit do sunt ut proident elit reprehenderit ipsum proident incididunt minim exercitation mollit. Commodo non incididunt ut
          nulla fugiat laborum incididunt cillum incididunt
        </p>
        <Link to="/order-online" className="flex items-center gap-2 font-bold text-lime-900 hover:text-lime-600">
          <span>Order delivery</span>
          <IoMdCart size="20px" />
        </Link>
      </div>
    </div>
  );
}

function Specials() {
  return (
    <div className="flex flex-col w-full gap-12">
      <div className="flex w-full justify-between items-start">
        <div>
          <h2 className="text-4xl font-bold">Specials</h2>
        </div>
        <div>
          <Link to="/menu" className="flex bg-lime-700 hover:bg-lime-600 text-white px-8 py-4 rounded-md text-xl font-bold">
            Online Menu
          </Link>
        </div>
      </div>

      {/* <div className="flex w-full justify-between gap-12"> */}
      <div className="flex flex-col lg:flex-row w-full justify-between gap-12">
        <SpecialCard title="Greek Salad" image={ImageGreekSalad} />
        <SpecialCard title="Bruschetta" image={ImageBruschettaSalad} />
        <SpecialCard title="Lemon Dessert" image={ImageLemonDessert} />
      </div>
    </div>
  );
}
export default Specials;
