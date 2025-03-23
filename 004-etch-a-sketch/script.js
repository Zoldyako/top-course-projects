document.addEventListener('DOMContentLoaded', () => {
    
    const container = document.getElementById('grid-container')
    const btn_canvas_size = document.getElementById('canvas-size')
    const btn_erase = document.getElementById('erase-canvas')
    
    function generate_grid(res) {

        let x, y, grid, cell
        
        // Creates divs and appends it to divs "column"
        for(y = 0; y < res; y++) {

            grid = document.createElement("div")
            grid.className = "column"

            for(x = 0; x < res; x++) {
                cell = document.createElement("div")
                cell.className = "cell"
                grid.appendChild(cell)

                cell.addEventListener('mousedown', (event) => {

                    switch (event.button) {
                        case 0:
                            event.target.style.backgroundColor = 'black'
                            break
                        case 1:
                            event.target.style.backgroundColor = 'white'
                            break
                        case 2:
                            event.target.style.backgroundColor = 'white'
                            break
                    }
                })
            }

            container.appendChild(grid)
        }
    }


    function canvas_size() {
        res = prompt("Max canvas size is 100")

        if (res > 100) { 
            generate_grid(100) 
            return 
        }

        else if (res < 0) {
            generate_grid(2)
            return
        }

        else if (res === null) {
            generate_grid(16)
        }

        generate_grid(res)
    }


    function reset_canvas() {
        container.innerHTML = ''
    }

    
    btn_canvas_size.addEventListener('click', () => {
        reset_canvas()
        canvas_size()
    })

    btn_erase.addEventListener('click', () => {
        cells = document.getElementsByClassName('cell')

        for (i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = 'white'
        }
    })

    generate_grid(16)
    
});