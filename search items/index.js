const searchInput = document.getElementById('searchInput');
const items = document.getElementsByClassName('item');

searchInput.addEventListener('input', function()
{
  const searchTerm = searchInput.value.toLowerCase();

  Array.from(items).forEach(function(item)
  {
    const itemText = item.textContent.toLowerCase();

      if(itemText.includes(searchTerm))
      {
        item.style.display = 'block';
      }else{
        item.style.display = 'none';
      }
  });
});
