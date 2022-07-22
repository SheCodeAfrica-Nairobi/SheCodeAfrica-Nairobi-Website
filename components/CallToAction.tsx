import { FaUsers } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";
import { ImEye } from "react-icons/im";
import { GiPerson } from "react-icons/gi";

const CallToAction = () => {
  return (
    <div className="my-[100px] h-auto rounded-3xl bg-primary bg-opacity-10 px-20 py-10 md:h-[446px]">
      <div className="flex items-center justify-between leading-loose">
        <h2 className="text-2xl font-medium text-primary">We value:</h2>
        <button className="hidden rounded-full border-2 border-primary px-6 py-2 text-primary md:inline">
          Be a member
        </button>
      </div>
      <div className="mx-auto flex h-auto w-auto flex-col items-start py-10 md:flex-row md:space-x-6 lg:space-x-10">
        {item_contents.map((x) => (
          <Item Icon={x[0]} h3text={x[1]} ptext={x[2]} key={x[2]} />
        ))}
      </div>
    </div>
  );
};

const item_contents = [
  // icon, heading, paragraph
  [FaUsers, "Team Work", "We are bringing together women in our community to work together and empower each other."],
  [
    AiOutlineRise,
    "Technical Growth",
    "We provide technical and non-technical sessions to help our members grow their skills.",
  ],
  [ImEye, "Visibility", "We create visibility for our members through volunteer opportunities and speaking sessions."],
  [
    GiPerson,
    "Leadership",
    "Our events provide an opportunity for members to volunteer, manage and organise break out sessions.",
  ],
];

type ItemProps = {
  Icon: React.FC,
  h3text: string,
  ptext: string,
};

const Item = ({ h3text, ptext, Icon }: ItemProps) => {
  return (
    <div className="flex flex-col items-center space-y-4 text-darkAccent md:items-start">
      <Icon className="h-16 w-16 text-primary" />
      <h3 className="font-semibold">{h3text}</h3>
      <p className="text-center md:text-start">{ptext}</p>
    </div>
  );
};

export default CallToAction;
