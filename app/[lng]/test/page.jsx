import {ExtraFeatures} from "../../../components/sellForms"


const test = ({params:{lng}}) =>{
    return (
        <div className="pt-[10rem]">
            <ExtraFeatures lng={lng} />
        </div>
    )
}
export default test