import Promote from "../../components/Promote";
import ShopContent from "./components/Content";
import ShopFilters from "./components/Filters";

function ShopPage() {
  return (
    <>
      <Promote text="⚡️ Happy Holiday Deals on Everything ⚡️" />
      <section className="py-11">
        <div className="container">
          <div className="row">
            <ShopFilters />
            <ShopContent />
          </div>
        </div>
      </section>
    </>
  );
}

export default ShopPage;
