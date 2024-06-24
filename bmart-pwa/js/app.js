// app.js

document.querySelectorAll('.delete').forEach(button => {
  button.addEventListener('click', function() {
    if (confirm('Are you sure you want to delete this comment?')) {
      this.parentElement.remove();
    }
  });
});
