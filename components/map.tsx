
const key = 'AIzaSyCDcyZflRGQzA2s9vRzqtJ4ATVxEKE64e4'
// call as <Map coord={"51.4965956,-0.099385"}/> 
export default function Map({coord}:any):JSX.Element {

return(
<>
<iframe
  width="600"
  height="450"
  loading="lazy"
  src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=${coord}`}>
</iframe>
</>)
}