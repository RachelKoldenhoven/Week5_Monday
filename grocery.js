// ***You will need to add the necessary script tags for jQuery and grocery.js to index.html***

$(document).ready(function() {


    var groceries = [
        {name: "Tomatoes", status: "needed", price: "3.99", quantity: 5},
        {name: "Onions", status: "needed", price: "1.85", quantity: 2},
        {name: "Cilantro", status: "needed", price: ".95", quantity: 1},
        {name: "Limes", status: "complete", price: ".33", quantity: 3},
        {name: "Jalapeno", status: "complete", price: ".15", quantity: 2}
    ];
//1. Add groceries to <ul>. Store status, price and quantity as data attributes

    var addItem = function(name, status, price, quantity){
        var element = $('<li/>');
        element.attr( "data-price", price);
        element.attr( "data-status", status);
        element.attr("data-quantity", quantity);
        element.attr("data-name", name);
        element.text(name);
        $("#list").append(element);
    };
    for (i = 0; i < groceries.length; i++) {
        var currentItem = groceries[i];
        addItem(currentItem.name,currentItem.status, currentItem.price,currentItem.quantity);
    }


//2. Give 'needed' items a background-color of your choosing. Do the same for 'complete' items.
//   Choose any text color you desire.

    var setColor = function(){
        $('li').each(function(){
            if($(this).css("background-color")=== "rgba(0, 0, 0, 0)"){
                if($(this).attr("data-status")=== "needed"){
                    $(this).css("background-color", "red");
                } else {
                    $(this).css("background-color", "blue");
                }
            }

        });
    };

    setColor();

//3. Display the item quantity next to it's name. (  i.e. Tomatoes (5)  )


    var setQuantity = function(){
        $("li").each(function(){
            var label = $(this).attr("data-name") + " (" + $(this).attr("data-quantity") + ")";
            $(this).text(label);
        });
    };
   setQuantity();

//4. Display total quantity and cost on the page.

    var setTotalQuantity = function(){
        var totalQuantity = 0;
        $("li").each(function(){
            var Quantity = $(this).attr("data-quantity");
            totalQuantity = totalQuantity + parseInt(Quantity);
        });

        $(".numItems h4").text("Total Quantity: " + totalQuantity);
    };

    setTotalQuantity();

    var setTotalPrice = function(){
        console.log("setTotalPrice");
        var totalPrice = 0;
        $("li").each(function(){
            var Price = $(this).attr("data-price");
            var itemTotalPrice = Price * $(this).attr("data-quantity");
            totalPrice = totalPrice + itemTotalPrice;
        });

        $(".totalCost h4").text("Total Cost: $" + totalPrice);
    };

    setTotalPrice();




//5. When an item is hovered over, it's background should darken slightly. This can be done through CSS but use
//   JS for practice.
    var addHandlers = function(){
        $("li").mouseenter(function(){
            if ($(this).css("background-color") === ("rgb(255, 0, 0)")){
                $(this).css("background-color", "rgb(100, 0, 0)");
            }
            if($(this).css("background-color") === ("rgb(0, 0, 255)")){
                $(this).css("background-color","rgb(0, 0, 100)" );
            }

        });

        $("li").mouseleave(function(){
            if ($(this).hasClass("selected")){
                return;
            }
            console.log($(this).css("background-color"));
            if($(this).css("background-color") === ("rgb(100, 0, 0)")){
                $(this).css("background-color", "rgb(255, 0, 0)");
            }
            if($(this).css("background-color") ===  ("rgb(0, 0, 100)")){
                $(this).css("background-color", "rgb(0, 0, 255)");
            }
        });
        $("li").dblclick(function(){
            $(this).addClass("selected");

        });

    };

addHandlers();

//6. When and item is double-clicked, give it the class 'selected' and have it's background remain slightly darkened.




//7. When 'Remove Item' is clicked, delete the item from the list. Have the item .fadeOut()

    $("#removeItem").click(function(){
        $("li").each(function(){
            if($(this).hasClass("selected")){
                $(this).fadeOut();
            }
        });
    });

//8. When 'Add item' is clicked, a new item should be added to the list. 'Status' should default as 'needed'.
    $("#addNew .btn").click(function(){
        var name = $("#addItem").val();
        var price = $("#addPrice").val();
        var quantity = $("#addQuantity").val();
    addItem(name,"needed",price,quantity);

        setColor();
        setQuantity();
        setTotalQuantity();
        setTotalPrice();
        addHandlers();
    });


//9. ** Have total quantity and cost update when items are added or removed!

//10. Add a new item with a status called 'splurge'. Any 'splurge' items should have a $$$ before the name and a
//    unique background-color.

//11. Create a 'Tighten Budget' button that removes all splurged items from the list.

//12. Add a <span> to each of your <li> items with a Plus Glyphicon (http://getbootstrap.com/components/). When
//    this is clicked the item should expand down to reveal it's price and quantity.

//13. **BONUS** Incorporate a new property called 'description' and display it however you prefer.





});
