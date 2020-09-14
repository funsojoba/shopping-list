//DELETE ITEM
function deleteTask(e) {
    if (confirm("Are you sure to delete this row?")) {
        e.parentElement.parentElement.remove();
    }
}
