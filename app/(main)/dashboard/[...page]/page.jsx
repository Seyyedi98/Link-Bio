import PageEditorInfo from "@/app/_components/form/page-editor-info";
import { currentUser } from "@/lib/get-user";

const EditorPage = async () => {
  const user = await currentUser();
  const data = await prisma.page.findMany({
    where: {
      owner: user.id,
    },
  });
  const currentPage = data?.[0];

  return (
    <div className="m-2">
      <PageEditorInfo page={currentPage} />
    </div>
  );
};

export default EditorPage;
