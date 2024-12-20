import React from "react";
function Shop() {
    return (
        <main>
            <h2>Shop at Fish Creek Animal Clinic</h2>

            <div id="flow">
                <section className="shop">
                    <h3>FishCreek Tote Bag</h3>
                    <img src="../../public/fishtote.gif" alt="Tote Bag" width="150" height="150"></img>
                        <p>Carry your pet supplies and accessories in a special tote from Fish Creek. 100% cotton. $14.95.</p>
                        <form method="post" action="#">
                            <input type="submit" value="Add to Cart"></input>
                        </form>
                </section>
                <section className="shop">
                    <h3>FishCreek Tote Bag</h3>

                    <img src="../../public/fishsweat.gif" alt="Fish Creek Sweatshirt" width="150" height="150"></img>
                        <p>A Fish Creek sweatshirt will warm you up on cool morning walks with your pet. 100% cotton. Size XL. $29.95.</p>
                        <form method="post" action="#">
                            <input type="submit" value="Add to Cart"></input>
                        </form>
                </section>
            </div>
        </main>
    );
}
export default Shop;