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


    for (i = 0; i < groceries.length; i++) {
        var currentItem = groceries[i];
        var element = $('<li/>');
        element.attr( "data-price", currentItem.price);
        element.attr( "data-status", currentItem.status);
        element.attr("data-quantity", currentItem.quantity);
        element.text(currentItem.name);
        $("#list").append(element);
    }


//2. Give 'needed' items a background-color of your choosing. Do the same for 'complete' items.
//   Choose any text color you desire.

    $('li').each(function(){
        if($(this).attr("data-status")=== "needed"){
            $(this).css("background-color", "red");
        }

    })

//3. Display the item quantity next to it's name. (  i.e. Tomatoes (5)  )

    $("li").each(function(){
        var label = $(this).text() + " (" + $(this).attr("data-quantity") + ")";
        $(this).text(label);
    })

//4. Display total quantity and cost on the page.

    var totalQuantity = 0;
    for (i = 0; i < groceries.length; i++) {
        var currentItem = groceries[i];
        totalQuantity = totalQuantity + currentItem.quantity;
    }

    $(".numItems h4").text("Total Quantity: " + totalQuantity);


    var totalPrice = 0;
    for(i = 0; i < groceries.length; i++) {
        var currentItem = groceries[i];
        totalPrice = totalPrice + currentItem.price * currentItem.quantity;
    }

    $(".totalCost h4").text("Total Cost: $" + totalPrice);



//5. When an item is hovered over, it's background should darken slightly. This can be done through CSS but use
//   JS for practice.

   $("li").mouseenter(function(){
       if ($(this).css("background-color") === ("rgb(255, 0, 0)")){
           $(this).css("background-color", "blue");
       } else {
           $(this).css("background-color","black" )
       }

   })


//6. When and item is double-clicked, give it the class 'selected' and have it's background remain slightly darkened.

    //$("li").dblclick(function(){

    //}


//7. When 'Remove Item' is clicked, delete the item from the list. Have the item .fadeOut()

//8. When 'Add item' is clicked, a new item should be added to the list. 'Status' should default as 'needed'.

//9. ** Have total quantity and cost update when items are added or removed!

//10. Add a new item with a status called 'splurge'. Any 'splurge' items should have a $$$ before the name and a
//    unique background-color.

//11. Create a 'Tighten Budget' button that removes all splurged items from the list.

//12. Add a <span> to each of your <li> items with a Plus Glyphicon (http://getbootstrap.com/components/). When
//    this is clicked the item should expand down to reveal it's price and quantity.

//13. **BONUS** Incorporate a new property called 'description' and display it however you prefer.





});
