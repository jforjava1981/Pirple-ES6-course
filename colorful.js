export function createColorfulDOM() {
    let pageTitleAndNameText = 'Colorful HTML CSS and Javascript';
    let pageDescription = 'This page demonstrates DOM magic with colorful rectangles.  Uses important DOM manipulation techniques to create colorful rectangles and shows color codes for CSS nerds. This requires immense creativity,skill of a Javascript Ninja!! Ha Ha Ha ;)';
    let colorCodes = ['#FF5733', '#FFA533', '#FFDA33', '#FFEC33', '#F0FF33', 
                      '#68FF33', '#33FF9F', '#33FFF3', '#33DAFF', '#FF33AC' ];

    function createPageName() {
         let pageNameNode = document.createElement('h1');
        pageNameNode.innerText = pageTitleAndNameText;
        return pageNameNode;
    }

    function createPageDescription() {
        let pageDescriptionNode = document.createElement('h2');
        pageDescriptionNode.innerText = pageDescription;
        return pageDescriptionNode;
    }

    function createPageTitle() {
        let titleNode = document.createElement('title');
        titleNode.innerText = pageTitleAndNameText;
        return titleNode;
    }

    function createRectangleWrapper() {
        let rectangleWrapper = document.createElement('div');
        rectangleWrapper.setAttribute('id','rectangleWrapper');
        return rectangleWrapper;
    }

    function createRectangleRow() {
      let rectangleRowContainer = document.createElement('div');
      rectangleRowContainer.setAttribute('style','margin-bottom:5px;');
      return rectangleRowContainer;
    }

    function createRectangle(colorCode) {
        let rectangle = document.createElement('div');
        rectangle.classList.add(['rectangleWrapper__rectangle']);
        rectangle.setAttribute('style',`background-color: ${colorCode};`);
        rectangle.setAttribute('id',`id_${colorCode}`);
        return rectangle;
    }

    function creteColorLabel(colorCode) {
        let colorTextContainer = document.createElement('div');
        colorTextContainer.innerText = colorCode;
        return colorTextContainer;
    }

    function createRectangleContainer() {
      let rectangleContainer = document.createElement('div');
      rectangleContainer.classList.add('rectangle-row__rectangle-container','rectangle-row__rectangle-container--same-row');
      return rectangleContainer;
    }

    function addNodeToDocument(domNode) {
      document.body.appendChild(domNode);
    }

    function addChildNode(parentDomNode,childNode) {
      parentDomNode.appendChild(childNode);
    }

    let pageTitle = createPageTitle();
    let headNode = document.querySelector('head');
    addChildNode(headNode, pageTitle);

    let pageHeader = createPageName();
    addNodeToDocument(pageHeader);

    let pageDescription = createPageDescription();
    addNodeToDocument(pageDescription);

    let wrapper = createRectangleWrapper();
   
    for( let i = 0; i < 2; i++) {
      let row = createRectangleRow();
      addChildNode(wrapper, row);
      for (let j = 0; j < 5; j++) {

          let currentColorCode = colorCodes[j + (i * 5)];

          let rectangleContainer = createRectangleContainer();        
          addChildNode(row, rectangleContainer);
          
          let rectangle = createRectangle(currentColorCode);
          addChildNode(rectangleContainer, rectangle);
          
          let colorLabel = creteColorLabel(currentColorCode);
          addChildNode(rectangleContainer, colorLabel);
          
      }      
    }
    addNodeToDocument(wrapper);
    console.log('Here are the rectangle IDs');
    let rectangleWrapper = document.querySelector('#rectangleWrapper');
    let ractangleRows = rectangleWrapper.querySelectorAll('div');
    ractangleRows.forEach(rectangleRow => {
        let rectangles = rectangleRow.querySelectorAll(`div[id^='id_']`);
          rectangles.forEach(rectangle => {
            console.log(rectangle.getAttribute('id'));
        });
    });
   
    
    
}