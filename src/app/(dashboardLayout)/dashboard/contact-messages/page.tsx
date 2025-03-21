import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllContactMessages } from "@/service/contact";
import { TContact } from "@/types/message.type";

const ContactMessagePage = async () => {
  const messages = ((await getAllContactMessages())?.data as TContact[]) || [];

  return (
    <Card className="mt-6">
      <CardContent className="pt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden md:table-cell">Name</TableHead>
              <TableHead className="hidden md:table-cell">Email</TableHead>
              <TableHead className="hidden md:table-cell">Message</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages &&
              messages?.map((message: TContact) => (
                <TableRow
                  key={message?._id}
                  className="md:table-row flex flex-col border-b"
                >
                  <TableCell className="md:table-cell block before:content-['Name'] before:font-bold before:text-slate-700 before:block md:before:content-none md:before:inline cursor-pointer">
                    {message?.name}
                  </TableCell>
                  <TableCell className="md:table-cell block before:content-['Email'] before:font-bold before:text-slate-700 before:block md:before:content-none md:before:inline cursor-pointer">
                    {message?.email}
                  </TableCell>
                  <TableCell className="md:table-cell block before:content-['Message'] before:font-bold before:text-slate-700 before:block md:before:content-none md:before:inline cursor-pointer">
                    {message?.message}
                  </TableCell>
                  <TableCell className="md:table-cell block before:content-['Date'] before:font-bold before:text-slate-700 before:block md:before:content-none md:before:inline cursor-pointer ">
                    {new Date(message?.createdAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ContactMessagePage;
