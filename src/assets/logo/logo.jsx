import { cn } from "@/lib/utils";

const Logo = (props) => {
    return (<div className={cn("flex items-center gap-2.5", props.className)}>
      <img src="/Logo.png" alt="Entrain Labs" width={150} height={40} className="h-10 w-auto"/>
    </div>);
};
export default Logo;
