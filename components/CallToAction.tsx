import { FaUsers } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";
import { ImEye } from "react-icons/im";
import { GiPerson } from "react-icons/gi";


const CallToAction = () => {
  return (
    <div className="my-[100px] bg-primary bg-opacity-10 h-auto rounded-3xl md:h-[446px] px-20 py-10">
      <div className="flex justify-between leading-loose items-center">
        <h2 className="font-medium text-2xl text-primary">We value:</h2>
        <button className="hidden md:inline border-primary text-primary border-2 rounded-full px-6 py-2">
          Be a member
        </button>
      </div>
      <div className="flex w-auto py-10 mx-auto flex-col md:flex-row items-start md:space-x-6 lg:space-x-10 h-auto">
		{
			item_contents.map(x => <Item Icon={x[0]} h3text={x[1]} ptext={x[2]} key={x[2]} />)
		}
      </div>
    </div>
  )
};


const item_contents = [
	// icon, heading, paragraph
	[
		FaUsers,
		"Team Work",
		"We are bringing together women in our community to work together and empower each other."
	], [
		AiOutlineRise,
		"Technical Growth",
		"We provide technical and non-technical sessions to help our members grow their skills."
	], [
		ImEye,
		"Visibility",
		"We create visibility for our members through volunteer opportunities and speaking sessions."
	], [
		GiPerson,
		"Leadership",
		"Our events provide an opportunity for members to volunteer, manage and organise break out sessions."
	]
]

const Item = ({h3text, ptext, Icon}: any) => {
	return (
		<div className="space-y-4 flex flex-col items-center md:items-start text-darkAccent">
			<Icon className="h-16 text-primary w-16" />
			<h3 className="font-semibold">{h3text}</h3>
			<p className="text-center md:text-start">{ptext}</p>
		</div>
	)
}

export default CallToAction;
