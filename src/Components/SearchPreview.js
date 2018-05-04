import React from 'react';

const SearchPreview =(search)=>(
<div className="SearchPreview">
    <div>
        {search.City}
    </div>
    <div>
        {search._id}
    </div>
</div>
);

export default SearchPreview;
