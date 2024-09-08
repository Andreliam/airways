document.getElementById('booking-form').addEventListener('submit', function(event){ event.preventDefault();
    const destination=
    document.getElementById('destination').value;
    const date=
    document.getElementById('date').value;
    const passengers =
    document.getElementById('passengers').value;
    if (destination&& date&& passengers){
        alert('flight to$ {destination} booked successfully for ${passenger}passenger(s) on $ {date}.');
    }else{
        alert('please fill out all fields.');
    }
});