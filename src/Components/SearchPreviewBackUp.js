import React from 'react';

class SearchPreview extends React.Component {

    getComponentPlaces(e,value) {

    console.log(value);
    history.push('/'+value);
    $(e.target).css({
        'background-color': '#ccc'
    });
 }

 render() {
   var search  = this.props;
     return (
       <div className="SearchPreview">
           <div>
               {search.City}
           </div>
           <div>
           <div>
             <text>{search.Loc_array[0].type_loc}</text><br />
             <text>{search.Loc_array[0].name_of_location[0]}</text><br />
             <text>{search.Loc_array[0].name_of_location[1]}</text><br />
             <text>{search.Loc_array[0].name_of_location[2]}</text><br />
           </div>
           <div>
             <text>{search.Loc_array[1].type_loc}</text><br />
             <text>{search.Loc_array[1].name_of_location[0]}</text><br />
             <text>{search.Loc_array[1].name_of_location[1]}</text><br />
             <text>{search.Loc_array[1].name_of_location[2]}</text><br />
           </div>
           <div>
             <text>{search.Loc_array[2].type_loc}</text><br />
             <text>{search.Loc_array[2].name_of_location[0]}</text><br />
             <text>{search.Loc_array[2].name_of_location[1]}</text><br />
             <text>{search.Loc_array[2].name_of_location[2]}</text><br />
           </div>
           </div>
       </div>
     )
 }
}
export default SearchPreview;







//Working code
render() {
  var search  = this.props;
    return (
      <div className="SearchPreview">
          <div>
              {search.City}
          </div>
          <div>
          {search.Loc_array.map(e =><li>{e.type_loc}</li>)}<br />
          {search.Loc_array.map(e =><li>{e.name_of_location}</li>)}<br />
          </div>
      </div>
    )
}
}
export default SearchPreview;
