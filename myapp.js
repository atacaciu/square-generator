let patrat = document.getElementById('modify');

let elements=document.getElementsByName('cssProperty');

function setup()
{
    for (let index =0; index < elements.length; index++ )
    {
        let Property= elements[index].getAttribute('id');

        let cssValue = elements[index].value;

        patrat.style[Property] = cssValue;
      
        patratS = parseInt(elements[1].value)*parseInt(elements[2].value)

        patrat.innerHTML = elements[0].value+" square "+"<br></br>"+" Surface: "+ patratS+" Pixels"
    }
}

document.getElementById('setup').addEventListener('click',setup);
 