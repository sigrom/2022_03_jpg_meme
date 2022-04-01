/**
 * fonction de remplissage du thumbnail
 * @param {Array<Meme>} memes 
 */
function fillMemeThumbnail(memes,nodeToFill) {
    console.log(arguments);
    if(undefined===nodeToFill){
        nodeToFill=document.querySelector('#meme-thumbnail');
    }
  
    var ulNode=document.createElement('ul');
    memes.forEach(function (e,i) {
        var liNode=document.createElement('li');
        // liNode.innerHTML=e.id+':'+e.name;
        var aNode=document.createElement('a');
        aNode.href="#";
        aNode.innerHTML=e.id+':'+e.name;
        aNode.addEventListener('click',function(evt){
            //stop du comportement par def.
            evt.preventDefault();
            //surcharge de l'url sans reload de page
            history.pushState('','','/edit/memes/'+e.id);

            // selection global du meme 
            unMemeGlobal=e;
            //affichage du meme selectionné + tremplissage des input
            setMemeValuesInFormInputs(e);
            setMemeOnSVGViewer(e);
        });
        liNode.appendChild(aNode);
        ulNode.appendChild(liNode); 
    }); 
    nodeToFill.querySelector('ul').remove();
    nodeToFill.appendChild(ulNode);
}
loadGlobalesMemes(fillMemeThumbnail);
