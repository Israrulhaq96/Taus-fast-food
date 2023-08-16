
import './App.css';
import Header from './components/Header';
import BannerInfo from './components/BannerInfo';
import Footer from './components/Footer';
import CategoryList from './components/CategoryList';
import DeliveryAddress from './components/DeliveryAddress';
import CategoryWiseMenu from './components/CategoryWiseMenu';
const categories=["APPETIZING DEALS"]
const items=[
    {
        id: 1,
        image: "https://chikoo.imgix.net/merchant-prod-pricevate/60d98635-3d1d-4884-8d29-d37b5230f071/product/1641566733074/1641566733075.jpg?ixlib=js-3.8.0&w=115&dpi=96&s=46c9eaf258703730911eaa33a02f801d",
       title: "Deal 1",
        detail: "Chicken Tikka and Paratha. Chicken Roll. Drink",
        price: 435,
        category : categories[0]
    },
    {
        id: 2,
        image: "https://chikoo.imgix.net/merchant-prod-pricevate/60d98635-3d1d-4884-8d29-d37b5230f071/product/1641570172616/1641570172618.jpg?ixlib=js-3.8.0&w=115&dpi=96&s=08ef19c3b59a5571a1a548bddb1c3079",
       title: "Deal 2",
        detail: "4 Chicken Rolls. 2 Cold Drinks",
        price: 600,
        category : categories[0]
    },
    {
        id: 3,
        image: "https://chikoo.imgix.net/merchant-prod-pricevate/60d98635-3d1d-4884-8d29-d37b5230f071/product/1641570033661/1641570033663.jpg?ixlib=js-3.8.0&dpi=96&w=1000&s=0a71cb11a086a8c06afcb44c7ef37cc9",
       title: "Deal 3",
        detail: "1 Tau's Special Kabab and 4 Garlic Naan 1 Chicken Karahi (Half) 1 Litre Drink",
        price: 1331,
       category : categories[0]
    },
    {
        id: 4,
        image: "https://chikoo.imgix.net/merchant-prod-pricevate/60d98635-3d1d-4884-8d29-d37b5230f071/product/1641570292094/1641570292094.jpg?ixlib=js-3.8.0&dpi=96&w=1000&s=9fd10b35024d8e73a35c5a7a84d76dd6",
      title: "Deal 4",
        detail: "Chicken Biryani Handi (Half). 2 Chicken Chatni Roll. 2 Drinks",
        price: 885,
       category : categories[0]
    },
    {
        id: 5,
        image: "https://chikoo.imgix.net/merchant-prod-pricevate/60d98635-3d1d-4884-8d29-d37b5230f071/product/1641570317507/1641570317507.jpg?ixlib=js-3.8.0&w=115&dpi=96&s=8b19958aee3542689ce3f4b9cdd239cd",
       title: "Deal 5",
        detail: "Chicken Makhni (Half) 3 Garlic and 3 Plain Naan Chicken Bihari Kabab",
        price: 1882,
       category : categories[0]
    },
    {
        id: 6,
        image: "https://chikoo.imgix.net/merchant-prod-pricevate/60d98635-3d1d-4884-8d29-d37b5230f071/product/1641570445358/1641570445360.jpg?ixlib=js-3.8.0&w=115&dpi=96&s=df81c47ee9b810f8166415468df4d275",                
       title: "Deal 6",
        detail: "1 Krunch burger + 1 Regular fries + 1 Regular drink",
        price: 698,
       category : categories[0]
    }
];

function App() {
    return (
        <>
            <Header />

            {/* content body */}

            <BannerInfo />

            <section className="main ">
                <CategoryList categories={categories}/>
               <DeliveryAddress/>
                
                <CategoryWiseMenu categories={categories} items={items}/>
            </section>

            <Footer />
        </>

    );
}

export default App;
