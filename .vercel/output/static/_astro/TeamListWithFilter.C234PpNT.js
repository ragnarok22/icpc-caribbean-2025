import { j as e, P as x } from "./definitions.B8rTUS0B.js";
import { r as n } from "./index.Cd_vQiNd.js";
function j({ teams: s, onFilterChange: a }) {
  const [i, r] = n.useState(""),
    [l, c] = n.useState(""),
    o = Array.from(new Set(s.map((t) => t.university.name))).sort();
  n.useEffect(() => {
    const t = s.filter((m) => {
      const u = m.teamName.toLowerCase().includes(i.toLowerCase()),
        p = !l || m.university.name === l;
      return u && p;
    });
    a(t);
  }, [i, l, s, a]);
  const d = () => {
      (r(""), c(""));
    },
    h = i !== "" || l !== "";
  return e.jsx("div", {
    className: "team-filter",
    children: e.jsxs("div", {
      className: "filter-controls",
      children: [
        e.jsxs("div", {
          className: "filter-group",
          children: [
            e.jsx("label", {
              htmlFor: "name-filter",
              className: "filter-label",
              children: "Team Name",
            }),
            e.jsx("input", {
              id: "name-filter",
              type: "text",
              placeholder: "Search by team name...",
              value: i,
              onChange: (t) => r(t.target.value),
              className: "filter-input",
            }),
          ],
        }),
        e.jsxs("div", {
          className: "filter-group",
          children: [
            e.jsx("label", {
              htmlFor: "university-filter",
              className: "filter-label",
              children: "University",
            }),
            e.jsxs("select", {
              id: "university-filter",
              value: l,
              onChange: (t) => c(t.target.value),
              className: "filter-select",
              children: [
                e.jsx("option", { value: "", children: "All Universities" }),
                o.map((t) => e.jsx("option", { value: t, children: t }, t)),
              ],
            }),
          ],
        }),
        h &&
          e.jsx("button", {
            onClick: d,
            className: "filter-reset-button",
            children: "Reset Filters",
          }),
      ],
    }),
  });
}
function N({ team: s }) {
  return e.jsxs("article", {
    className: "team-card",
    children: [
      e.jsxs("div", {
        className: "team-header",
        children: [
          e.jsx("img", {
            src: s.picture,
            alt: `${s.teamName} team photo`,
            className: "team-picture",
          }),
          e.jsxs("div", {
            className: "team-info",
            children: [
              e.jsx("h3", { className: "team-name", children: s.teamName }),
              e.jsxs("div", {
                className: "university",
                children: [
                  e.jsx("img", {
                    src: s.university.logo,
                    alt: `${s.university.name} logo`,
                    className: "university-logo",
                  }),
                  e.jsx("span", {
                    className: "university-name",
                    children: s.university.name,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "participants",
        children: [
          e.jsx("h4", { children: "Participants" }),
          e.jsx("ul", {
            className: "participants-list",
            children: s.participants.map((a, i) =>
              e.jsxs(
                "li",
                {
                  className: "participant",
                  children: [
                    e.jsx("span", {
                      className: "participant-name",
                      children: a.name,
                    }),
                    e.jsx("span", {
                      className: `participant-type ${a.type.toLowerCase()}`,
                      children: a.type === x.COACH ? "Coach" : "Member",
                    }),
                  ],
                },
                i,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function g({ teams: s }) {
  const [a, i] = n.useState(s);
  return e.jsxs("section", {
    className: "team-list",
    children: [
      e.jsxs("div", {
        className: "team-list-header",
        children: [
          e.jsx("h2", { children: "Participating Teams" }),
          e.jsxs("p", {
            className: "team-count",
            children: [
              a.length,
              " ",
              a.length === 1 ? "team" : "teams",
              a.length !== s.length &&
                e.jsxs("span", {
                  className: "filter-count",
                  children: [" (filtered from ", s.length, ")"],
                }),
            ],
          }),
        ],
      }),
      e.jsx(j, { teams: s, onFilterChange: i }),
      a.length === 0
        ? e.jsxs("div", {
            className: "no-teams-message",
            children: [
              e.jsx("p", { children: "No teams found matching your filters." }),
              e.jsx("p", {
                className: "suggestion",
                children: "Try adjusting your search criteria.",
              }),
            ],
          })
        : e.jsx("div", {
            className: "teams-grid",
            children: a.map((r, l) => e.jsx(N, { team: r }, l)),
          }),
    ],
  });
}
export { g as default };
