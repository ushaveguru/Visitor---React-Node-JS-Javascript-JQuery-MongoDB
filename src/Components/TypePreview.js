import React from 'react';

const TypePreview =(search)=>(
<div className="TypePreview">
    <div>
        {search.typeoflocation}
    </div>
    <div>
        {search.nameoflocation}
    </div>
</div>
);

export default TypePreview;
