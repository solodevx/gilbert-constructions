// shadcn / Radix Select components (UI primitives)
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "./ui/select";

// shadcn Input & Textarea components
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

// Reusable site Button component
import Button from "./Button";

const Form = () => {
    return (
        // Main form wrapper (vertical layout)
        <form className="flex flex-col">

            {/* Top section: inputs + select */}
            <div className="flex flex-col gap-[20px] mb-[20px]">

                {/* Full name input */}
                <Input type="fullname" placeholder="Full Name" />
                <Input type="email" placeholder="Email Address" />

                {/* Phone input + service select (stacked on mobile, row on xl) */}
                <div className="flex flex-col xl:flex-row gap-[20px]">

                    {/* Phone number input */}
                    <Input type="phone" placeholder="Phone Number" />

                    {/* Service selection dropdown */}
                    <Select className="bg-white">
                        {/* Select trigger (what the user clicks) */}
                        <SelectTrigger className="w-full rounded-none h-[54px] text-secondary outline-none">
                            <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        {/* Dropdown content (portal-rendered by Radix) */}
                        <SelectContent className="bg-white z-50">
                            {/* Grouping select items */}
                            <SelectGroup>
                                {/* Optional label inside dropdown */}
                                <SelectLabel>Select a service</SelectLabel>
                                {/* Individual selectable items */}
                                <SelectItem value="construction">Construction</SelectItem>
                                <SelectItem value="renovation">Renovation</SelectItem>
                                <SelectItem value="restoration">Restoration</SelectItem>
                                <SelectItem value="consulting">Consulting</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                </div>

            </div>

            {/* Bottom section: message textarea + submit button */}
            <div className="flex flex-col gap-6">

                {/* Message input */}
                <Textarea
                    className="h-[180px] resize-none rounded-none"
                    placeholder="Enter your message"
                />
                {/* Submit button */}
                <Button text="Send Message">
                    Send Message
                </Button>
                
            </div>

        </form>
    )
}

export default Form;
