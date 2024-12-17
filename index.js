<script>

// Show seat selection
            function showSeats() {
                document.querySelector('.foot-text-container').style.display = 'none';
            document.getElementById('seats').style.display = 'block';
}
            // Toggle seat selection
            function toggleSeat(seat) {
                seat.classList.toggle('selected');
}

            // Confirm bookin
            function confirmBooking() {
                document.getElementById('seats').style.display = 'none';
            document.getElementById('confirmation').style.display = 'block';
            </script>