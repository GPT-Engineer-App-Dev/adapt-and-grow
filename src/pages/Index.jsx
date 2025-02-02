import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    
    // Here you would typically send the email to your backend
    // For now, we'll just show a success toast
    toast({
      title: "Subscribed!",
      description: `You've successfully subscribed with: ${email}`,
    });

    // Clear the input
    e.target.email.value = "";
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Application</h1>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className="hover:text-blue-400" href="/">Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-blue-400 bg-transparent">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] bg-gray-800 rounded-md shadow-lg">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-600 p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mt-4 text-lg font-medium text-white">Services Overview</div>
                          <p className="text-sm leading-tight text-white/90">
                            Explore our range of services designed to meet your needs.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-700 hover:text-blue-400" href="/service1">
                          <div className="text-sm font-medium leading-none">Service 1</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                            Description for Service 1
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-700 hover:text-blue-400" href="/service2">
                          <div className="text-sm font-medium leading-none">Service 2</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                            Description for Service 2
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="hover:text-blue-400" href="/about">About</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="hover:text-blue-400" href="/contact">Contact</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      <main className="flex-grow p-4">
        <Card className="mb-4 bg-gray-800 text-white">
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is a bare-bones application with a dark theme. Start building from here!</p>
          </CardContent>
        </Card>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Click me</Button>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p>We are a company dedicated to creating amazing applications.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul>
                <li><a href="#" className="hover:text-blue-400">Home</a></li>
                <li><a href="#" className="hover:text-blue-400">Services</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <form onSubmit={handleSubscribe} className="flex">
                <Input type="email" name="email" placeholder="Enter your email" className="mr-2 bg-gray-700 text-white" required />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 My Application. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;