// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Your code goes here!

$(document).ready(function () {
    const gridCanvas = $('#pixelCanvas');
    let colorTool = $('#colorPicker');
    let h,w,block;
    
    $('input[type="submit"]').on('click' , function (event) {
        event.preventDefault();
        
        h = $('#inputHeight').val();
        w = $('#inputWeight').val();
        
        makeGrid(h,w);
    });
    
    $('#pixelCanvas').on('click' , 'td' , function (event) {
        $(this).css('background-color', colorTool.val());
    })
    
    function makeGrid(height,width){
        gridCanvas.find('tbody').remove();
        gridCanvas.append('<tbody></tbody>');
        
        let gridBody = gridCanvas.find('tbody');
        
        for (let i = 0 ; i < height ; i++) {    
            gridBody.append('<tr></tr>');
        }
        
        for (let j = 0; j < width; j++){
            gridBody.find('tr').append('<td></td>');
        }
    }
});