document.addEventListener('DOMContentLoaded', function() {
    let smilesDrawer = new SmilesDrawer.Drawer({
        width: 150,
        height: 150,
        bondThickness: 0.6,
        bondLength: 15,
        shortBondLength: 0.85,
        bondSpacing: 0.18 * 15,
        atomVisualization: 'default',
        fontSizeLarge: 6,
        fontSizeSmall: 4,
        padding: 15.0
    });

    document.querySelectorAll('.smiles').forEach(function(element) {
        let smiles = element.textContent.trim();
        element.textContent = ''; // Clear the text content after reading
        let canvas = document.createElement('canvas');
        canvas.width = 200;
        canvas.height = 200;
        canvas.style.backgroundColor = '#FFFFFF'; // Add white background
        canvas.style.borderRadius = '8px'; // Add rounded corners
        element.insertBefore(canvas, element.firstChild);
        
        SmilesDrawer.parse(smiles, function(tree) {
            smilesDrawer.draw(tree, canvas, "light", false);
        }, function(err) {
            console.error('Failed to parse SMILES:', err);
        });
    });
});