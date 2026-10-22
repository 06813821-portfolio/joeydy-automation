<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the personal portfolio as a single index page with in-page section links so visitors can scan the full body of work in one flow.
- Keep the compliance badge in a dedicated presentation component using the original CDN asset and react-zoom-pan-pinch for lightbox gestures, so image preservation and touch zoom stay independent of project galleries.
- Every route must set staticData.sitemap; /sitemap.xml is generated from the router so the sitemap tracks pages automatically.
