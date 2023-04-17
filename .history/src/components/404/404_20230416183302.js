import './style404.css';

export const style404 = () => {
    return (

<div ="ag-page-404">
    <div ="ag-toaster-wrap">
        <div ="ag-toaster">
            <div ="ag-toaster_back"></div>
            <div ="ag-toaster_front">
                <div ="js-toaster_lever ag-toaster_lever"></div>
            </div>
            <div ="ag-toaster_toast-handler">
                <div ="ag-toaster_shadow"></div>
                <div ="js-toaster_toast ag-toaster_toast js-ag-hide"></div>
            </div>
        </div>

        <canvas id="canvas-404" ="ag-canvas-404"></canvas>
        <img ="ag-canvas-404_img" src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/404-error-smoke-from-toaster/images/smoke.png" />
    </div>
        </div>
    );
}