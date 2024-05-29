type compute_grid_auto_rows = {
    w:number,
    gap:number,
    minW:number,
    rate:number,
    contentsNum:number,
}
export function machinePhotosFunc(){
    const compute_grid_auto_rows = ({
        w,gap,minW,rate,contentsNum
    }:compute_grid_auto_rows) =>{
        let total = 0
        if(w>minW){
            total = (w/contentsNum - gap*(contentsNum-1))*rate
        }else{
            total = (w/(contentsNum-1) - gap*(contentsNum-2))*rate
        }
        return total
    }

    return {
        compute_grid_auto_rows
    }
}