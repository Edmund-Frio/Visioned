export function Note() {

  return (
    <div className="">
      <form className="grid gap-4 p-8">
        <input required className="rounded-md p-2" type="text" name="title" placeholder="Untitled Note"/>
        <textarea className="rounded-md p-2 resize-none outline-none" rows={20}></textarea>

      </form>
    </div>
  );
}
