// import Resizer from "./../src/resizer";

async function Main() 
{
    var Resizer = (await import("./../src/resizer")).default;

    const selector = '.rz-demo'

    let resizer = new Resizer(selector)

    function addResizer() {
        resizer = new Resizer(selector)
    }

    function removeResizer() {
        Resizer.removeBySelector(selector)
    }
}

Main();
