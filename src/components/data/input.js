export const input = {
  diagrams: [
    {
      diagramid: "L0-A",
      title: "Level 0 - Overall View",
      overview: "",
      objects: [
        {
          diagid: "L0-A",
          nodeid: 1,
          nodetype: "Architectural Plane",
          caption: "TSB Management Plane",
          overview: "",
          tags: "skwalking;apache-skywalking;network;microservices;cloudnative"
        },
        {
          diagid: "L0-A",
          nodeid: 2,
          nodetype: "Architectural Plane",
          caption: "Istio Control Plane",
          overview: "",
          tags:
            "istio;service-mesh;skywalking;apache-skyalking;telemetry;ngac;security;grpc;authn;authz",
          infotypes: [
            {
              infotype: "Whitepaper",
              info: [
                {
                  infotype: "Whitepaper",
                  infoid: "2",
                  title:
                    "Special Publication: Building Secure Microservices-Based Applications Using Service-Mesh Architecture",
                  subgenre: "Special Publication",
                  overview:
                    "A Service Mesh is the only option for addressing a number of security requirements in service to service interactions in the modernized world of microservices and cloud-based applications, according to a NIST Special Publication that was released today. NIST Computer Scientist Ramaswamy Chandramouli and Tetrate Founding Engineer Zack Butcher co-authored the …",
                  tags: "editorial;security;service-mesh",
                  url: "https://www.tetrate.io/blog/sp/"
                },
                {
                  infotype: "Events",
                  infoid: "6",
                  title: "Istio Dominated at KubeCon San Diego",
                  subgenre: "Event Summary",
                  overview:
                    "A crowd of 12,000 attended KubeCon San Diego this November, looking to the cloud native skies for the IT forecast. Temperature takers couldn’t fail to notice the maturation of service mesh technologies and the rise of Istio, the open source project that has now moved into production and is operating at scale. Only a year ago, KubeCon attendees in Seattle …",
                  tags: "event;kubecon;cloudnative;istio",
                  url: "https://www.tetrate.io/blog/istiokubecon/"
                },
                {
                  infotype: "Events",
                  infoid: "9",
                  title: "Tetrate at KubeCon San Diego",
                  subgenre: "Event Summary",
                  overview:
                    "Going to KubeCon San Diego? Visit us at Booth SE65. KubeCon is just 2 weeks away, and Tetrate is excited to be sending our engineers, including top Istio and Envoy contributors. Look for the newly released Istio roadmap, Istio Up and Running, by Lee Calcote and our own Zack Butcher. And stop by and ask us anything about bridging legacy with cloud native. …",
                  tags: "event;istio;envoy;kubecon",
                  url: "https://www.tetrate.io/blog/kubeconsd/"
                },
                {
                  infotype: "Events",
                  infoid: "41",
                  title:
                    "Join Tetrate at Service Mesh Day 2019 in San Francisco - the First-Ever Service Mesh Industry Conference",
                  subgenre: "Service Mesh Day",
                  overview:
                    "Last week was a tremendous week for Tetrate as we officially launched with $12.5M in funding led by Dell Technologies Capital with participation from Intel Capital, Samsung NEXT, 8VC and Rain Capital. Our vision as a company is not only to provide best-in-breed service mesh technology to manage microservices in a cloud-native world, but to share the vast …",
                  tags:
                    "company-news;cloudnative;microservices;event;service-mesh",
                  url:
                    "https://www.tetrate.io/blog/join-tetrate-at-service-mesh-day-2019-in-san-francisco-the-first-ever-service-mesh-industry-conference/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "12",
                  title: "Venil Noronha (VMware) Service Mesh Day 2019",
                  subgenre: "Service Mesh Day/ Talk Transcripts",
                  overview:
                    "Transcript: All right. Thanks for joining me in this talk. My name is Venil Noronha and I worked with the VMware open source technology center. Um, I have a fun job that is to contribute upstream to Istio and Envoy full time. Today we’ll have a look at rest API in some problems associated with rest APIs and how gRPC solves these problems. And finally …",
                  tags: "grpc;event;talk-videos",
                  url:
                    "https://www.tetrate.io/blog/smd_venil_noronha_from_vmware/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "13",
                  title:
                    "Cameron Moreau and Tian Wang at Tetrate's Service Mesh Day 2019: All for Auth & Auth for All: Bringing End User Identity to the Service Mesh",
                  subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                  overview:
                    "Cameron Moreau and Tian Wang from Pivotal spoke at Tetrate’s inaugural Service Mesh Day 2019 in San Francisco on the workings, pain points, and future of auth. Moreau opened with a description of today’s “gruesome world of auth,” wherein a hapless app developer, tasked to bring auth to the apps they’re building for enterprise, is overwhelmed with complex, …",
                  tags: "talk-videos;event;service-mesh;authn;authz",
                  url: "https://www.tetrate.io/blog/smd_cameron_and_tian/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "14",
                  title:
                    "Unpacking Next Generation Access Control (NGAC) and Tetrate Q",
                  subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                  overview:
                    "David Ferraiolo of NIST and Tetrate’s Ignasi Barrera presented on Next Generation Access Control at Tetrate’s Service Mesh Day 2019 in San Francisco. Ferraiolo gave an in-depth presentation on Next Generation Access Control (NGAC), an ANSI/INCITS standard that boldly goes where no RBAC or ABAC has gone before. NGAC enables diverse access control …",
                  tags: "talk-videos;event;security;ngac",
                  url:
                    "https://www.tetrate.io/blog/smd_david_ferraiolo_and_ignasi/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "16",
                  title:
                    "Lee Calcote at Tetrate's Service Mesh Day 2019: Service Meshes, but at What Cost?",
                  subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                  overview:
                    "Service mesh: Where do I get started? And what’s the overhead? Speaking at service mesh workshops over the past year, these are the two questions that Lee Calcote, senior director of technology strategy at SolarWinds, heard over and over again. How much latency are we talking about? What’s the CPU burn based on all this value I’m getting for free, with …",
                  tags: "talk-videos;event;service-mesh",
                  url: "https://www.tetrate.io/blog/smd_lee_calcote/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "20",
                  title: "CISO Panel Service Mesh Day 2019",
                  subgenre: "Service Mesh Day/ Talk Transcripts",
                  overview:
                    "Transcript: Matt Klein Okay. Sure. Cool. So this is a end user panel. So while I read the questions that I was just sent aa, I’m going to let everyone introduce themselves. Okay, great. Okay. Uh, yeah. Hi, I’m snow. I work with square on their traffic and observability team, uh, been working on building out, um, are migrating us towards using an …",
                  tags: "event;talk-videos;service-mesh",
                  url: "https://www.tetrate.io/blog/smd_end_user_panel/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "21",
                  title: "CISO Panel Service Mesh Day 2019",
                  subgenre: "Service Mesh Day/ Talk Transcripts",
                  overview:
                    "Transcript: Deepak Jeevan Hi everybody. Thank you for spending lunchtime with us, humble CISOs. Uh, so we changed the analysts VC panel that’s in the printed sheet to a CISO panel. Thought it will be more interesting to, for all of you to hear from how chief security information officers, chief information security officers of different companies, uh, …",
                  tags: "event;talk-videos;service-mesh",
                  url: "https://www.tetrate.io/blog/smd_panel_ciso/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "24",
                  title: "Frederick Kautz (Doc.ai) Service Mesh Day 2019",
                  subgenre: "Service Mesh Day/ Talk Transcripts",
                  overview:
                    "Transcript: So, uh, let me start with a, so we have this project, it’s called Network Service Mesh, uh, you’ll understand why it’s called this in a moment. So, uh, first let’s start with a short story though. So we have this character named Sarah and I actually use this for most of my introductions cause it helps, uh, provide a really …",
                  tags: "event;talk-videos;service-mesh",
                  url: "https://www.tetrate.io/blog/smd_frederick_kautz/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "25",
                  title:
                    "Janna Brummel Robin van Zijll ING Service Mesh Day 2019",
                  subgenre: "Service Mesh Day/ Talk Transcripts",
                  overview:
                    "Transcript: Hi, welcome to our talk. Last ones before lunch. That’s always a bit of a challenge. Uh, our talk is a little bit different than the others. Um, we’re introducing service mesh in our organization working on a POC, so not in production yet. And we’re doing that at the same time as introducing, uh, the public cloud. And we want to …",
                  tags: "event;talk-videos;service-mesh",
                  url: "https://www.tetrate.io/blog/smd_janna_and_robin/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "28",
                  title: "Prajakta Joshi (Google) and Dhi",
                  subgenre: "Service Mesh Day/ Talk Transcripts",
                  overview:
                    "Transcript: PRAJAKTA JOSHI: So Hi folks. It’s really great to be here. I’m Prajakta, I’m a Product Manager in cloud networking in Google Cloud. And I want to invite Dhi to introduce himself. DHI AURRAHMAN: Okay. So, hi. Hi folks. My name is Dhi, I’m a Software Engineer at Tetrate. I’m an Envoy maintainer. JOSHI: Perfect. So a lot …",
                  tags: "event;talk-videos;service-mesh",
                  url: "https://www.tetrate.io/blog/smd_prajakta_joshi_dhi/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "29",
                  title: "Shriram Rajagopalan (Tetrate) Service Mesh Day 2019",
                  subgenre: "Service Mesh Day/ Talk Transcripts",
                  overview:
                    "Transcript: So you’ve seen AWS App Mesh presentation and in the afternoon you’ll actually see a presentation from the traffic director folks at Google and so on. All of these are basically, you know, manifestations of how you would deploy a service mesh across a heterogeneous environment, spanning virtual machines, your Kubernetes clusters or ECS, …",
                  tags: "event;talk-videos;service-mesh",
                  url: "https://www.tetrate.io/blog/smd_shriram/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "30",
                  title: "The 5 traits of successful service mesh adopters",
                  subgenre: "Talk Summary",
                  overview:
                    "Tetrate’s Zack Butcher gave a whirlwind session, a “Practical Guide to Istio,” at DockerCon in San Francisco last week, with one of the 5 top-rated talks at the conference. He pointed to 5 traits of successful service mesh adopters. #1. They’re focused on a single pain point. A mesh is just too big to adopt wholesale from day one. Service mesh is a tool, not …",
                  tags: "service-mesh",
                  url: "https://www.tetrate.io/blog/5-traits/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "31",
                  title:
                    "Three Myths about Service Mesh: Service Mesh Day Remarks from Tetrate CEO Varun Talwar",
                  subgenre: "Service Mesh Day / Talk Summary",
                  overview:
                    "Tetrate CEO Varun Talwar kicked off Service Mesh Day, the first ever industry conference on service mesh, with a few words about what had brought the standing-room-only crowd, from a variety of organizations and industries, together. From the 10,000-foot view, compute density is growing. Users need more compute, network and storage capacity. The shift to …",
                  tags: "event;talk-videos;service-mesh",
                  url: "https://www.tetrate.io/blog/smd_varun_talwar/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "51",
                  title: "Future of service mesh",
                  subgenre: "Talk Transcript/Summary",
                  overview:
                    "Transcript: Chris Aniszczyk Uh, let’s try to stick on time and get started. So my name is Chris Chris Aniszczyk. I have the fun job of running the cloud native computing foundation and today we’re chatting with a bunch of folks about the future of service mesh. So, uh, to get started, why don’t we do some quick introductions on the panel and …",
                  tags: "talk-videos;service-mesh",
                  url:
                    "https://www.tetrate.io/blog/smd_future_of_servicemesh_panel/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "52",
                  title: "Matt Klein at Service Mesh Day",
                  subgenre: "",
                  overview:
                    "Envoy creator Matt Klein (Lyft) advises organizations starting with service mesh to make changes incrementally, to solve problems one piece at a time.",
                  tags: "event;talk-videos;service-mesh;envoy",
                  url:
                    "https://www.youtube.com/watch?v=Lo-6x6NbUVI&feature=youtu.be"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "53",
                  title: "Chris Aniszczyk at Service Mesh Day",
                  subgenre: "",
                  overview:
                    "As companies adopt Kubernetes and reevaluate their architectures, Chris Aniszczyk, CTO/COO of the Cloud Native Computing Foundation predicts they'll look increasingly to mesh to provide observability.",
                  tags: "event;talk-videos;kubernetes;cncf;service-mesh",
                  url:
                    "https://www.youtube.com/watch?v=9O9im_nLcQQ&feature=youtu.be"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "54",
                  title: "Suresh Visvanathan at Service Mesh Day",
                  subgenre: "",
                  overview:
                    "Suresh describes how Verizon media has been using service mesh to secure traffic flow with MTLS without code changes, distribute tracing to troubleshoot, and more.",
                  tags: "event;talk-videos;service-mesh",
                  url:
                    "https://www.youtube.com/watch?v=sa8R9PD7coc&feature=youtu.be"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "55",
                  title: "David Ferraiolo at Service Mesh Day",
                  subgenre: "",
                  overview:
                    "David of NIST walks through Next Generation Access Control (NGAC), a new approach to delegating and querying access privileges with fine-grained policies.",
                  tags: "event;talk-videos;nist;ngac",
                  url: "https://www.youtube.com/watch?v=DcpfxYWwAOE"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "56",
                  title: "Louis Ryan at Service Mesh Day",
                  subgenre: "",
                  overview:
                    "Louis Ryan of Google explains how service mesh delivers flexibility and control to app developers and administrators and operators abstracting the network's control plane and enabling the enterprise.",
                  tags: "event;talk-videos;service-mesh;network",
                  url:
                    "https://www.youtube.com/watch?v=Rr3Ftm4p6nc&feature=youtu.be"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "57",
                  title: "Larry Peterson at Service Mesh Day",
                  subgenre: "",
                  overview:
                    "Larry Peterson of ONFtalks about federating service meshes and the challenges ahead for building next generation applications.",
                  tags: "event;talk-videos;service-mesh",
                  url:
                    "https://www.youtube.com/watch?v=mazZvoxxm1w&feature=youtu.be"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "59",
                  title: "An Overview of Istio Mesh",
                  subgenre: "",
                  overview:
                    "Istio: Weaving the Service Mesh. By Shriram Rajagopalan & Louis Ryan",
                  tags: "event;talk-videos;service-mesh;istio",
                  url: "https://www.youtube.com/watch?v=WFEllbmRI8U&t=1s"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "60",
                  title: "Debugging Istio Networking",
                  subgenre: "",
                  overview:
                    "Liam White explains how to debug Istio to test reliability and functions of Istio components.",
                  tags: "event;talk-videos;istio",
                  url:
                    "https://www.youtube.com/watch?v=K2mM3c11WN4&feature=youtu.be&t=4139"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "61",
                  title:
                    "Connecting, Managing, Observing, and Securing Services",
                  subgenre: "",
                  overview:
                    "Zack Butcher talks about how a service mesh helps with the transition from monoliths to microservices to empower the organization.",
                  tags: "event;talk-videos;miroservices;service-mesh",
                  url:
                    "https://www.infoq.com/presentations/service-mesh-microservices-2018/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "62",
                  title: "GitOps for Istio",
                  subgenre: "",
                  overview:
                    "Learn how to manage Istio config like managing code. Varun Talwar's Kubecon Europe 2018 talk.",
                  tags: "event;talk-videos;istio;kubecon",
                  url: "https://www.youtube.com/watch?v=VkKMf23ZokY"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "63",
                  title: "Latency Analysis with Istio & OpenCensus",
                  subgenre: "",
                  overview:
                    "Learn how to do latency and hotspot analysis in a microservices environment with Istio and Envoy integrated with OpenCensus.",
                  tags: "event;talk-videos;microservices;istio;envoy",
                  url:
                    "https://www.youtube.com/watch?v=ME-EhOKqFOY&feature=youtu.be"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "64",
                  title: "Istio - The Packet's-Eye View",
                  subgenre: "",
                  overview:
                    "A practical introduction to the operation of Istio and how it can impact your environment. Kubecon Seattle 2018 talk.",
                  tags: "event;talk-videos;kubecon;istio",
                  url:
                    "https://www.youtube.com/watch?v=zJnYuFsLHfY&feature=youtu.be"
                },
                {
                  infotype: "Podcasts",
                  infoid: "5",
                  title: "Louis Ryan & Varun Talwar Podcast",
                  subgenre: "Podcast Summary",
                  overview:
                    "The co-creators of Istio– Louis Ryan of Google and Tetrate’s Varun Talwar– talk with TC Currie on the history of Istio, how it came to exist in its current form and the collaboration between Google, IBM and Lyft that got the project off the ground. They address how the project was designed to allow businesses to solve observability issues, …",
                  tags: "podcast;istio",
                  url: "https://www.tetrate.io/blog/podcast_louis_and_varun/"
                },
                {
                  infotype: "How To",
                  infoid: "10",
                  title: "451's Take on Service Mesh",
                  subgenre: "Tech Overview",
                  overview:
                    "Analysts Jean Atelsek and William Fellows of 451 Research give their take on the role of service mesh as a cloud-native enabler, calling it a potential “Swiss Army Knife of modern-day software, solving for the most vexing challenges of distributed microservices based applications.” The role of service mesh as a cloud-native enabler is building …",
                  tags: "service-mesh;cloudnative",
                  url: "https://www.tetrate.io/blog/451/"
                },
                {
                  infotype: "How To",
                  infoid: "18",
                  title:
                    "3x Performance Improvement in SkyWalking’s recent 6.1 release",
                  subgenre: "Tech Overview",
                  overview:
                    "Apache SkyWalking, the observability analysis and application performance monitoring (APM) tool, shattered its own performance record with its recent 6.1 release. Designed especially for microservices, cloud native and container based architecture, SkyWalking provides distributed tracing, service mesh telemetry analysis, metric aggregation and workload …",
                  tags:
                    "skywalking;apache-skywalking;cloudnative;microservices;telemetry",
                  url: "https://www.tetrate.io/blog/skywalking-performance/"
                },
                {
                  infotype: "How To",
                  infoid: "32",
                  title: "The New Stack Features Apache SkyWalking",
                  subgenre: "Tech Overview",
                  overview:
                    "Apache SkyWalking, the open source APM that Tetrate has embraced as the path to observability, was featured yestreday by the New Stack, the podcast and DevOps tech blog. In “SkyWalking: APM for the Heterogeneous New Stack,” Susan Hall describes SkyWalking founder Sheng Wu– who is now a Tetrate engineer– grew SkyWalking in just four years from a …",
                  tags: "skywalking;apache-skywalking;devops",
                  url:
                    "https://www.tetrate.io/blog/new-stack-features-skywalking/"
                },
                {
                  infotype: "How To",
                  infoid: "35",
                  title: "SkyWalking Graduates as an Apache Top Level Project",
                  subgenre: "Tech Overview",
                  overview:
                    "Tetrate congratulates its own Sheng Wu, founder of SkyWalking Apache SkyWalking, the observability analysis and application performance monitoring (APM) tool built especially for microservices, cloud-native and container-based architectures, has graduated as an Apache Top Level Project. Founded by Tetrate’s Sheng Wu, SkyWalking was originally created as an …",
                  tags: "skywalking;apache-skywalking",
                  url:
                    "https://www.tetrate.io/blog/skywalking-graduates-as-top-level-project/"
                },
                {
                  infotype: "How To",
                  infoid: "37",
                  title: "Tetrate Networkless Mesh",
                  subgenre: "Tech Overview",
                  overview:
                    "The Service Mesh Day has been an amazing conference. From the beginning to the end, attendees could enjoy high-quality technical sessions combined with inspirational talks and visions on the future. We have been humbled by the good acceptance it has had, and listened to the inquires and struggles people are facing when trying to modernize their …",
                  tags: "service-mesh",
                  url: "https://www.tetrate.io/blog/tetrate-networkless/"
                },
                {
                  infotype: "How To",
                  infoid: "44",
                  title:
                    "Case Study: Tetrate Resolves the Complexities of NAV's Transition to Istio",
                  subgenre: "Case Study",
                  overview:
                    "About Norwegian Labour and Welfare Administration (NAV) The Norwegian Labour and Welfare Administration (NAV) is the government directorate responsible for implementing Norway’s welfare model, with services ranging from child benefits to pensions. NAV is responsible for distributing a third of Norway’s national budget. In five years, it’s estimated that 95% …",
                  tags: "customer-case-study;istio",
                  url:
                    "https://www.tetrate.io/blog/case-study-tetrate-resolves-the-complexities-of-navs-transition-to-istio/"
                },
                {
                  infotype: "How To",
                  infoid: "45",
                  title: "SkyWalking V6 Is Service Mesh Ready",
                  subgenre: "Tech Overview",
                  overview:
                    "Context: The integration of SkyWalking and Istio Service Mesh yields an essential open-source tool for resolving the chaos created by the proliferation of siloed, cloud-based services. Apache SkyWalking is an open, modern performance management tool for distributed services, designed especially for microservices, cloud native and container-based (Docker, K8s, …",
                  tags:
                    "skywalking;service-mesh;istio;apache-skywalking;microservices;cloudnative",
                  url:
                    "https://www.tetrate.io/blog/skywalking-v6-is-service-mesh-ready/"
                },
                {
                  infotype: "How To",
                  infoid: "46",
                  title: "Tetrate Istio Cloud Map Operator",
                  subgenre: "Tech Overview",
                  overview:
                    "AWS recently announced Cloud Map, a Service Discovery service that allows you to define friendly names for your cloud resources so that your applications can quickly discover the relevant endpoints associated with them. In Istio, you register services that are external to your mesh to allow services in your mesh to route to them, this is done via an Istio …",
                  tags: "aws;istio;service-mesh",
                  url:
                    "https://www.tetrate.io/blog/tetrate-istio-cloud-map-operator/"
                },
                {
                  infotype: "How To",
                  infoid: "47",
                  title: "gRPC Transcoding With Istio",
                  subgenre: "Tech Tutorial",
                  overview:
                    "There are a lot of advantages to using gRPC instead of HTTP/JSON when building new APIs, like HTTP/2, streaming, cross-language support, server push, etc. The hardest part tends to be legacy services that expect HTTP/JSON. This is why gRPC-JSON transcoding is so attractive: we can implement gRPC servers but expose them to legacy services with a HTTP/JSON …",
                  tags: "grpc;istio",
                  url:
                    "https://www.tetrate.io/blog/grpc-transcoding-with-istio/"
                },
                {
                  infotype: "How To",
                  infoid: "48",
                  title: "Multi-Cluster Communication – a Multi-Mesh Approach",
                  subgenre: "Tech Overview",
                  overview:
                    "Current solutions for cross-cluster networking all use VPNs and a single control plane, with all the failure and latency problems that result. At Tetrate we’ve designed a scheme for using one Istio mesh per cluster to do cross-cluster routing. This post presents an open-source tool, Coddiwomple, which automates generation of the Istio config needed to enact …",
                  tags: "multi-cluster;multi-mesh;istio;service-mesh",
                  url:
                    "https://www.tetrate.io/blog/multi-cluster-communication-a-multi-mesh-approach/"
                },
                {
                  infotype: "How To",
                  infoid: "49",
                  title: "Getting Started With Istio on Amazon EKS",
                  subgenre: "Tech Tutorial (External)",
                  overview:
                    "In this post, commissioned for the AWS Open Source blog, Tetrate’s Matt Turner writes the first of a series introducing Istio and its use on Amazon’s EKS. Posted externally",
                  tags: "amazon-eks;aws;istio",
                  url:
                    "https://www.tetrate.io/blog/getting-started-with-istio-on-amazon-eks/"
                },
                {
                  infotype: "How To",
                  infoid: "50",
                  title: "Istio 1 0 Nightly on Eks",
                  subgenre: "Tech Tutorial",
                  overview:
                    "The Amazon Elastic Container Service for Kubernetes, EKS, is the long-awaited hosted Kubernetes offering from AWS. It offers managed Kubernetes 1.10 clusters, and is currently GA in two regions in North America. Building on Kubernetes, Istio is a service mesh that provides “An open platform to connect, manage, and secure microservices.” Here at Tetrate we’re …",
                  tags:
                    "kubernetes;aws;istio;service-mesh;microservices;amazon-eks",
                  url: "https://www.tetrate.io/blog/istio-1-0-nightly-on-eks/"
                },
                {
                  infotype: "Other Info",
                  infoid: "8",
                  title: "Istio: Up and running",
                  subgenre: "Book Announcement",
                  overview:
                    "A Practical Guide to Istio You’ve been in a loud living room at some point, fussing with a pile of identical clickers, trying to turn down the volume. In IT, you know you need service mesh the way you know you need a universal remote. Your system is large, distributed, and unwieldy. Your services are running in heterogeneous environments. Your cloud native …",
                  tags: "book;istio",
                  url: "https://www.tetrate.io/blog/uprunning/"
                },
                {
                  infotype: "Other Info",
                  infoid: "42",
                  title: "Press Release - Service Mesh Day 2019",
                  subgenre: "Press Release",
                  overview:
                    "Tetrate Hosts First-Ever Service Mesh Industry Conference with Service Mesh Day 2019 Creators of Istio and Envoy Headline Event on March 28 and 29 in San Francisco Exploring Application of Service Mesh to Accelerate Digital Transformation SAN FRANCISCO – March 19, 2019 – Tetrate, the enterprise service mesh company, is proud to announce details of Service …",
                  tags: "company-news;event;service-mesh;istio;envoy",
                  url:
                    "https://www.tetrate.io/blog/press-release-service-mesh-day-2019/"
                },
                {
                  infotype: "Other Info",
                  infoid: "43",
                  title: "Press Release – Tetrate Launch",
                  subgenre: "Press Release",
                  overview:
                    "Key Contributors of Envoy and Istio Projects Launch Tetrate with $12.5M in Funding to Create Enterprise-Grade Service Mesh SAN FRANCISCO – March 13, 2019 – Tetrate, the enterprise service mesh company, today launched with $12.5M in funding, led by Dell Technologies Capital with participation from 8VC, Intel Capital, Rain Capital and Samsung NEXT. The funding …",
                  tags: "company-news;envoy;istio",
                  url: "https://www.tetrate.io/blog/press-release/"
                }
              ]
            },
            {
              infotype: "Events",
              info: []
            },
            {
              infotype: "Talk Videos",
              info: []
            },
            {
              infotype: "Podcasts",
              info: []
            },
            {
              infotype: "How To",
              info: []
            },
            {
              infotype: "Other Info",
              info: []
            }
          ]
        },
        {
          diagid: "L0-A",
          nodeid: 3,
          nodetype: "Architectural Plane",
          caption: "Envoy Data Plane",
          overview: "",
          tags: "envoy;getenvoy;kubernetes;multi-cluster;aws",
          infotypes: [
            {
              infotype: "Events",
              info: [
                {
                  infotype: "Events",
                  infoid: "9",
                  title: "Tetrate at KubeCon San Diego",
                  subgenre: "Event Summary",
                  overview:
                    "Going to KubeCon San Diego? Visit us at Booth SE65. KubeCon is just 2 weeks away, and Tetrate is excited to be sending our engineers, including top Istio and Envoy contributors. Look for the newly released Istio roadmap, Istio Up and Running, by Lee Calcote and our own Zack Butcher. And stop by and ask us anything about bridging legacy with cloud native. …",
                  tags: "event;istio;envoy;kubecon",
                  url: "https://www.tetrate.io/blog/kubeconsd/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "27",
                  title:
                    "Matt Klein at Tetrate's Service Mesh Day 2019: Envoy as the standard data plane and where it's going",
                  subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                  overview:
                    "Matt Klein, the creator of Envoy, says he had greatly underestimated the market demand for a proxy that could be used in a generic way. The Lyft software engineer wrote Envoy as a “communication bus” to handle issues like rate limiting, circuit breaking, and load balancing. It facilitates network-transparent applications and allows developers to focus on …",
                  tags: "event;alk-videos;envoy",
                  url: "https://www.tetrate.io/blog/smd_matt_klein/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "52",
                  title: "Matt Klein at Service Mesh Day",
                  subgenre: "",
                  overview:
                    "Envoy creator Matt Klein (Lyft) advises organizations starting with service mesh to make changes incrementally, to solve problems one piece at a time.",
                  tags: "event;talk-videos;service-mesh;envoy",
                  url:
                    "https://www.youtube.com/watch?v=Lo-6x6NbUVI&feature=youtu.be"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "53",
                  title: "Chris Aniszczyk at Service Mesh Day",
                  subgenre: "",
                  overview:
                    "As companies adopt Kubernetes and reevaluate their architectures, Chris Aniszczyk, CTO/COO of the Cloud Native Computing Foundation predicts they'll look increasingly to mesh to provide observability.",
                  tags: "event;talk-videos;kubernetes;cncf;service-mesh",
                  url:
                    "https://www.youtube.com/watch?v=9O9im_nLcQQ&feature=youtu.be"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "63",
                  title: "Latency Analysis with Istio & OpenCensus",
                  subgenre: "",
                  overview:
                    "Learn how to do latency and hotspot analysis in a microservices environment with Istio and Envoy integrated with OpenCensus.",
                  tags: "event;talk-videos;microservices;istio;envoy",
                  url:
                    "https://www.youtube.com/watch?v=ME-EhOKqFOY&feature=youtu.be"
                },
                {
                  infotype: "How To",
                  infoid: "11",
                  title: "Announcing GetEnvoy",
                  subgenre: "Tech Overview",
                  overview:
                    "Why Envoy Proxy If you’re running a large, distributed architecture, you’ve probably heard of Envoy, if not pored over its features for controlling, securing and monitoring a system with unwieldy, heterogeneous components. A quick walkthrough, if you haven’t: Originally built at Lyft, Envoy is an open source, edge and service proxy that abstracts the …",
                  tags: "getenvoy;envoy;proxy",
                  url:
                    "https://www.tetrate.io/blog/announcing-the-getenvoy-project/"
                },
                {
                  infotype: "How To",
                  infoid: "15",
                  title: "The Basics of Envoy and Envoy Extensibility",
                  subgenre: "Tech Overview",
                  overview:
                    "In his 2019 talks at KubeCon Barcelona, Tetrate Engineer and Envoy Senior Maintainer Lizan Zhou presented an overview of Envoy and a deep dive into its extensibility. The service proxy solves a host of operational problems related to observability and networking in large distributed systems, and its extensibility allows it to be adapted to a large variety of …",
                  tags: "kubecon;envoy",
                  url:
                    "https://www.tetrate.io/blog/envoybasicsandextensibility/"
                },
                {
                  infotype: "How To",
                  infoid: "36",
                  title: "Envoy CVE security fixes for GetEnvoy",
                  subgenre: "Tech Overview",
                  overview:
                    "The Envoy security team today [announced]() the availability of Envoy 1.9.1 to address two high-risk vulnerabilities related to header values and HTTP URL paths. We also released the GetEnvoy build of Envoy 1.9.1 and the latest master build that fixes the vulnerability. Users are encouraged to upgrade to 1.9.1 or latest master build to address the following …",
                  tags: "getenvoy;envoy",
                  url:
                    "https://www.tetrate.io/blog/security-fixes-for-getenvoy/"
                },
                {
                  infotype: "How To",
                  infoid: "46",
                  title: "Tetrate Istio Cloud Map Operator",
                  subgenre: "Tech Overview",
                  overview:
                    "AWS recently announced Cloud Map, a Service Discovery service that allows you to define friendly names for your cloud resources so that your applications can quickly discover the relevant endpoints associated with them. In Istio, you register services that are external to your mesh to allow services in your mesh to route to them, this is done via an Istio …",
                  tags: "aws;istio;service-mesh",
                  url:
                    "https://www.tetrate.io/blog/tetrate-istio-cloud-map-operator/"
                },
                {
                  infotype: "How To",
                  infoid: "48",
                  title: "Multi-Cluster Communication – a Multi-Mesh Approach",
                  subgenre: "Tech Overview",
                  overview:
                    "Current solutions for cross-cluster networking all use VPNs and a single control plane, with all the failure and latency problems that result. At Tetrate we’ve designed a scheme for using one Istio mesh per cluster to do cross-cluster routing. This post presents an open-source tool, Coddiwomple, which automates generation of the Istio config needed to enact …",
                  tags: "multi-cluster;multi-mesh;istio;service-mesh",
                  url:
                    "https://www.tetrate.io/blog/multi-cluster-communication-a-multi-mesh-approach/"
                },
                {
                  infotype: "How To",
                  infoid: "49",
                  title: "Getting Started With Istio on Amazon EKS",
                  subgenre: "Tech Tutorial (External)",
                  overview:
                    "In this post, commissioned for the AWS Open Source blog, Tetrate’s Matt Turner writes the first of a series introducing Istio and its use on Amazon’s EKS. Posted externally",
                  tags: "amazon-eks;aws;istio",
                  url:
                    "https://www.tetrate.io/blog/getting-started-with-istio-on-amazon-eks/"
                },
                {
                  infotype: "How To",
                  infoid: "50",
                  title: "Istio 1 0 Nightly on Eks",
                  subgenre: "Tech Tutorial",
                  overview:
                    "The Amazon Elastic Container Service for Kubernetes, EKS, is the long-awaited hosted Kubernetes offering from AWS. It offers managed Kubernetes 1.10 clusters, and is currently GA in two regions in North America. Building on Kubernetes, Istio is a service mesh that provides “An open platform to connect, manage, and secure microservices.” Here at Tetrate we’re …",
                  tags:
                    "kubernetes;aws;istio;service-mesh;microservices;amazon-eks",
                  url: "https://www.tetrate.io/blog/istio-1-0-nightly-on-eks/"
                },
                {
                  infotype: "Other Info",
                  infoid: "38",
                  title: "Introducing Tetrate Q",
                  subgenre: "Product",
                  overview:
                    "The modern enterprise infrastructure is a mishmash of legacy infrastructure, SaaS services, a smattering of cloud-native platforms like Kubernetes, along with an aging access control system that struggles to keep up with all the changes in the enterprise as it marches toward modernization. We no longer live in a world where the infrastructure is full of pets …",
                  tags: "tetrateq;kubernetes;cloudnative",
                  url: "https://www.tetrate.io/blog/introducing-tetrate-q/"
                },
                {
                  infotype: "Other Info",
                  infoid: "39",
                  title:
                    "Announcing AWS-Tetrate partnership to bring enterprise grade Envoy to App Mesh users",
                  subgenre: "Press Release",
                  overview:
                    "Today we announced an exciting partnership with AWS AppMesh. Tetrate GetEnvoy, which provides certified builds of Envoy, can now be used by customers of AWS App Mesh with EC2, ECS and EKS. This enables customers to have one set of verified and approved builds of Envoy across their data center and AWS. “Today, many customers are running applications on the …",
                  tags: "aws;getenvoy;envoy;amazon-eks;amazon-app-mesh",
                  url:
                    "https://www.tetrate.io/blog/appmesh-tetrate-integration/"
                },
                {
                  infotype: "Other Info",
                  infoid: "40",
                  title:
                    "Press Release Tetrate Works With Amazon Web Services to Bring Enterprise Grade Envoy to Aws App Mesh Users",
                  subgenre: "Press Release",
                  overview:
                    "Support for AWS App Mesh will be showcased for the first time at ​Service Mesh Day on March 29, 2019 in San Francisco SAN FRANCISCO – March 27, 2019 – Tetrate​, the ​recently launched​ enterprise service mesh company, today announced its support for the launch of Amazon Web Services (AWS) App Mesh, a cloud service that makes it easy to run microservices by …",
                  tags: "company-news;envoy;getenvoy;amazon-app-mesh;aws",
                  url:
                    "https://www.tetrate.io/blog/press-release-tetrate-works-with-amazon-web-services-to-bring-enterprise-grade-envoy-to-aws-app-mesh-users/"
                },
                {
                  infotype: "Other Info",
                  infoid: "42",
                  title: "Press Release - Service Mesh Day 2019",
                  subgenre: "Press Release",
                  overview:
                    "Tetrate Hosts First-Ever Service Mesh Industry Conference with Service Mesh Day 2019 Creators of Istio and Envoy Headline Event on March 28 and 29 in San Francisco Exploring Application of Service Mesh to Accelerate Digital Transformation SAN FRANCISCO – March 19, 2019 – Tetrate, the enterprise service mesh company, is proud to announce details of Service …",
                  tags: "company-news;event;service-mesh;istio;envoy",
                  url:
                    "https://www.tetrate.io/blog/press-release-service-mesh-day-2019/"
                },
                {
                  infotype: "Other Info",
                  infoid: "43",
                  title: "Press Release – Tetrate Launch",
                  subgenre: "Press Release",
                  overview:
                    "Key Contributors of Envoy and Istio Projects Launch Tetrate with $12.5M in Funding to Create Enterprise-Grade Service Mesh SAN FRANCISCO – March 13, 2019 – Tetrate, the enterprise service mesh company, today launched with $12.5M in funding, led by Dell Technologies Capital with participation from 8VC, Intel Capital, Rain Capital and Samsung NEXT. The funding …",
                  tags: "company-news;envoy;istio",
                  url: "https://www.tetrate.io/blog/press-release/"
                }
              ]
            },
            {
              infotype: "Talk Videos",
              info: []
            },
            {
              infotype: "How To",
              info: []
            },
            {
              infotype: "Other Info",
              info: []
            }
          ]
        },
        {
          diagid: "L0-A",
          nodeid: 4,
          nodetype: "Deep Dive",
          caption: "...    (Management Plane Deep Dive)",
          overview: "",
          tags: "skwalking;apache-skywalking;network;microservices;cloudnative",
          infotypes: [
            {
              infotype: "Events",
              info: [
                {
                  infotype: "Events",
                  infoid: "6",
                  title: "Istio Dominated at KubeCon San Diego",
                  subgenre: "Event Summary",
                  overview:
                    "A crowd of 12,000 attended KubeCon San Diego this November, looking to the cloud native skies for the IT forecast. Temperature takers couldn’t fail to notice the maturation of service mesh technologies and the rise of Istio, the open source project that has now moved into production and is operating at scale. Only a year ago, KubeCon attendees in Seattle …",
                  tags: "event;kubecon;cloudnative;istio",
                  url: "https://www.tetrate.io/blog/istiokubecon/"
                },
                {
                  infotype: "Events",
                  infoid: "33",
                  title: "More About Service Mesh Day",
                  subgenre: "Service Mesh Day",
                  overview:
                    "Tetrate was proud to host over 260 attendees at Service Mesh Day 2019. Attendees and speakers hailed from a variety of industries but as a group agreed that microservices are now a fundamental piece of enterprise software. As microservices gain traction in the cloud, developers are looking for tools to help manage and secure these services at scale. Matt …",
                  tags: "event;microservices",
                  url:
                    "https://www.tetrate.io/blog/more-about-service-mesh-day/"
                },
                {
                  infotype: "Events",
                  infoid: "41",
                  title:
                    "Join Tetrate at Service Mesh Day 2019 in San Francisco - the First-Ever Service Mesh Industry Conference",
                  subgenre: "Service Mesh Day",
                  overview:
                    "Last week was a tremendous week for Tetrate as we officially launched with $12.5M in funding led by Dell Technologies Capital with participation from Intel Capital, Samsung NEXT, 8VC and Rain Capital. Our vision as a company is not only to provide best-in-breed service mesh technology to manage microservices in a cloud-native world, but to share the vast …",
                  tags:
                    "company-news;cloudnative;microservices;event;service-mesh",
                  url:
                    "https://www.tetrate.io/blog/join-tetrate-at-service-mesh-day-2019-in-san-francisco-the-first-ever-service-mesh-industry-conference/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "19",
                  title:
                    "Larry Peterson at Tetrate's Service Mesh Day 2019: A History of Networking and What’s Next",
                  subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                  overview:
                    "At Tetrate’s Service Mesh Day, ONF CTO Larry Peterson illustrated his session on the history and future of networking with a diagram depicting the evolution of the “narrow waist of the internet.” Peterson’s full slide deck We’ve come far from the minimalism Peterson shared in the form of the IP protocol datagram created around 1980– a historical …",
                  tags: "event;talk-videos;network",
                  url: "https://www.tetrate.io/blog/smd_larry_peterson/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "22",
                  title:
                    "Chris Aniszczyk at Tetrate's Service Mesh Day 2019: The CNCF Perspective",
                  subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                  overview:
                    "“Service mesh is going to go through this wonderful phase of growth,” said Chris Aniszczyk, CTO/COO of the Cloud Native Computing Foundation (CNCF). As companies adopt Kubernetes, break apart their monoliths and start to modernize, they begin to look for solutions to traffic management and they need to observe their systems at another level. That’s where …",
                  tags: "event;talk-videos;network;cncf",
                  url: "https://www.tetrate.io/blog/smd_chris_aniszczyk/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "56",
                  title: "Louis Ryan at Service Mesh Day",
                  subgenre: "",
                  overview:
                    "Louis Ryan of Google explains how service mesh delivers flexibility and control to app developers and administrators and operators abstracting the network's control plane and enabling the enterprise.",
                  tags: "event;talk-videos;service-mesh;network",
                  url:
                    "https://www.youtube.com/watch?v=Rr3Ftm4p6nc&feature=youtu.be"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "63",
                  title: "Latency Analysis with Istio & OpenCensus",
                  subgenre: "",
                  overview:
                    "Learn how to do latency and hotspot analysis in a microservices environment with Istio and Envoy integrated with OpenCensus.",
                  tags: "event;talk-videos;microservices;istio;envoy",
                  url:
                    "https://www.youtube.com/watch?v=ME-EhOKqFOY&feature=youtu.be"
                },
                {
                  infotype: "How To",
                  infoid: "10",
                  title: "451's Take on Service Mesh",
                  subgenre: "Tech Overview",
                  overview:
                    "Analysts Jean Atelsek and William Fellows of 451 Research give their take on the role of service mesh as a cloud-native enabler, calling it a potential “Swiss Army Knife of modern-day software, solving for the most vexing challenges of distributed microservices based applications.” The role of service mesh as a cloud-native enabler is building …",
                  tags: "service-mesh;cloudnative",
                  url: "https://www.tetrate.io/blog/451/"
                },
                {
                  infotype: "How To",
                  infoid: "18",
                  title:
                    "3x Performance Improvement in SkyWalking’s recent 6.1 release",
                  subgenre: "Tech Overview",
                  overview:
                    "Apache SkyWalking, the observability analysis and application performance monitoring (APM) tool, shattered its own performance record with its recent 6.1 release. Designed especially for microservices, cloud native and container based architecture, SkyWalking provides distributed tracing, service mesh telemetry analysis, metric aggregation and workload …",
                  tags:
                    "skywalking;apache-skywalking;cloudnative;microservices;telemetry",
                  url: "https://www.tetrate.io/blog/skywalking-performance/"
                },
                {
                  infotype: "How To",
                  infoid: "32",
                  title: "The New Stack Features Apache SkyWalking",
                  subgenre: "Tech Overview",
                  overview:
                    "Apache SkyWalking, the open source APM that Tetrate has embraced as the path to observability, was featured yestreday by the New Stack, the podcast and DevOps tech blog. In “SkyWalking: APM for the Heterogeneous New Stack,” Susan Hall describes SkyWalking founder Sheng Wu– who is now a Tetrate engineer– grew SkyWalking in just four years from a …",
                  tags: "skywalking;apache-skywalking;devops",
                  url:
                    "https://www.tetrate.io/blog/new-stack-features-skywalking/"
                },
                {
                  infotype: "How To",
                  infoid: "35",
                  title: "SkyWalking Graduates as an Apache Top Level Project",
                  subgenre: "Tech Overview",
                  overview:
                    "Tetrate congratulates its own Sheng Wu, founder of SkyWalking Apache SkyWalking, the observability analysis and application performance monitoring (APM) tool built especially for microservices, cloud-native and container-based architectures, has graduated as an Apache Top Level Project. Founded by Tetrate’s Sheng Wu, SkyWalking was originally created as an …",
                  tags: "skywalking;apache-skywalking",
                  url:
                    "https://www.tetrate.io/blog/skywalking-graduates-as-top-level-project/"
                },
                {
                  infotype: "How To",
                  infoid: "45",
                  title: "SkyWalking V6 Is Service Mesh Ready",
                  subgenre: "Tech Overview",
                  overview:
                    "Context: The integration of SkyWalking and Istio Service Mesh yields an essential open-source tool for resolving the chaos created by the proliferation of siloed, cloud-based services. Apache SkyWalking is an open, modern performance management tool for distributed services, designed especially for microservices, cloud native and container-based (Docker, K8s, …",
                  tags:
                    "skywalking;service-mesh;istio;apache-skywalking;microservices;cloudnative",
                  url:
                    "https://www.tetrate.io/blog/skywalking-v6-is-service-mesh-ready/"
                },
                {
                  infotype: "How To",
                  infoid: "50",
                  title: "Istio 1 0 Nightly on Eks",
                  subgenre: "Tech Tutorial",
                  overview:
                    "The Amazon Elastic Container Service for Kubernetes, EKS, is the long-awaited hosted Kubernetes offering from AWS. It offers managed Kubernetes 1.10 clusters, and is currently GA in two regions in North America. Building on Kubernetes, Istio is a service mesh that provides “An open platform to connect, manage, and secure microservices.” Here at Tetrate we’re …",
                  tags:
                    "kubernetes;aws;istio;service-mesh;microservices;amazon-eks",
                  url: "https://www.tetrate.io/blog/istio-1-0-nightly-on-eks/"
                },
                {
                  infotype: "Other Info",
                  infoid: "38",
                  title: "Introducing Tetrate Q",
                  subgenre: "Product",
                  overview:
                    "The modern enterprise infrastructure is a mishmash of legacy infrastructure, SaaS services, a smattering of cloud-native platforms like Kubernetes, along with an aging access control system that struggles to keep up with all the changes in the enterprise as it marches toward modernization. We no longer live in a world where the infrastructure is full of pets …",
                  tags: "tetrateq;kubernetes;cloudnative",
                  url: "https://www.tetrate.io/blog/introducing-tetrate-q/"
                }
              ]
            },
            {
              infotype: "Talk Videos",
              info: []
            },
            {
              infotype: "How To",
              info: []
            },
            {
              infotype: "Other Info",
              info: []
            }
          ]
        },
        {
          diagid: "L0-A",
          nodeid: 5,
          nodetype: "Deep Dive",
          caption: "...    (Control Plane Deep Dive) ",
          overview: "",
          tags:
            "istio;service-mesh;skywalking;apache-skyalking;telemetry;ngac;security;grpc;authn;authz",
          infotypes: [
            {
              infotype: "Whitepaper",
              info: [
                {
                  infotype: "Whitepaper",
                  infoid: "2",
                  title:
                    "Special Publication: Building Secure Microservices-Based Applications Using Service-Mesh Architecture",
                  subgenre: "Special Publication",
                  overview:
                    "A Service Mesh is the only option for addressing a number of security requirements in service to service interactions in the modernized world of microservices and cloud-based applications, according to a NIST Special Publication that was released today. NIST Computer Scientist Ramaswamy Chandramouli and Tetrate Founding Engineer Zack Butcher co-authored the …",
                  tags: "editorial;security;service-mesh",
                  url: "https://www.tetrate.io/blog/sp/"
                },
                {
                  infotype: "Events",
                  infoid: "6",
                  title: "Istio Dominated at KubeCon San Diego",
                  subgenre: "Event Summary",
                  overview:
                    "A crowd of 12,000 attended KubeCon San Diego this November, looking to the cloud native skies for the IT forecast. Temperature takers couldn’t fail to notice the maturation of service mesh technologies and the rise of Istio, the open source project that has now moved into production and is operating at scale. Only a year ago, KubeCon attendees in Seattle …",
                  tags: "event;kubecon;cloudnative;istio",
                  url: "https://www.tetrate.io/blog/istiokubecon/"
                },
                {
                  infotype: "Events",
                  infoid: "9",
                  title: "Tetrate at KubeCon San Diego",
                  subgenre: "Event Summary",
                  overview:
                    "Going to KubeCon San Diego? Visit us at Booth SE65. KubeCon is just 2 weeks away, and Tetrate is excited to be sending our engineers, including top Istio and Envoy contributors. Look for the newly released Istio roadmap, Istio Up and Running, by Lee Calcote and our own Zack Butcher. And stop by and ask us anything about bridging legacy with cloud native. …",
                  tags: "event;istio;envoy;kubecon",
                  url: "https://www.tetrate.io/blog/kubeconsd/"
                },
                {
                  infotype: "Events",
                  infoid: "41",
                  title:
                    "Join Tetrate at Service Mesh Day 2019 in San Francisco - the First-Ever Service Mesh Industry Conference",
                  subgenre: "Service Mesh Day",
                  overview:
                    "Last week was a tremendous week for Tetrate as we officially launched with $12.5M in funding led by Dell Technologies Capital with participation from Intel Capital, Samsung NEXT, 8VC and Rain Capital. Our vision as a company is not only to provide best-in-breed service mesh technology to manage microservices in a cloud-native world, but to share the vast …",
                  tags:
                    "company-news;cloudnative;microservices;event;service-mesh",
                  url:
                    "https://www.tetrate.io/blog/join-tetrate-at-service-mesh-day-2019-in-san-francisco-the-first-ever-service-mesh-industry-conference/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "12",
                  title: "Venil Noronha (VMware) Service Mesh Day 2019",
                  subgenre: "Service Mesh Day/ Talk Transcripts",
                  overview:
                    "Transcript: All right. Thanks for joining me in this talk. My name is Venil Noronha and I worked with the VMware open source technology center. Um, I have a fun job that is to contribute upstream to Istio and Envoy full time. Today we’ll have a look at rest API in some problems associated with rest APIs and how gRPC solves these problems. And finally …",
                  tags: "grpc;event;talk-videos",
                  url:
                    "https://www.tetrate.io/blog/smd_venil_noronha_from_vmware/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "13",
                  title:
                    "Cameron Moreau and Tian Wang at Tetrate's Service Mesh Day 2019: All for Auth & Auth for All: Bringing End User Identity to the Service Mesh",
                  subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                  overview:
                    "Cameron Moreau and Tian Wang from Pivotal spoke at Tetrate’s inaugural Service Mesh Day 2019 in San Francisco on the workings, pain points, and future of auth. Moreau opened with a description of today’s “gruesome world of auth,” wherein a hapless app developer, tasked to bring auth to the apps they’re building for enterprise, is overwhelmed with complex, …",
                  tags: "talk-videos;event;service-mesh;authn;authz",
                  url: "https://www.tetrate.io/blog/smd_cameron_and_tian/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "14",
                  title:
                    "Unpacking Next Generation Access Control (NGAC) and Tetrate Q",
                  subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                  overview:
                    "David Ferraiolo of NIST and Tetrate’s Ignasi Barrera presented on Next Generation Access Control at Tetrate’s Service Mesh Day 2019 in San Francisco. Ferraiolo gave an in-depth presentation on Next Generation Access Control (NGAC), an ANSI/INCITS standard that boldly goes where no RBAC or ABAC has gone before. NGAC enables diverse access control …",
                  tags: "talk-videos;event;security;ngac",
                  url:
                    "https://www.tetrate.io/blog/smd_david_ferraiolo_and_ignasi/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "16",
                  title:
                    "Lee Calcote at Tetrate's Service Mesh Day 2019: Service Meshes, but at What Cost?",
                  subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                  overview:
                    "Service mesh: Where do I get started? And what’s the overhead? Speaking at service mesh workshops over the past year, these are the two questions that Lee Calcote, senior director of technology strategy at SolarWinds, heard over and over again. How much latency are we talking about? What’s the CPU burn based on all this value I’m getting for free, with …",
                  tags: "talk-videos;event;service-mesh",
                  url: "https://www.tetrate.io/blog/smd_lee_calcote/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "20",
                  title: "CISO Panel Service Mesh Day 2019",
                  subgenre: "Service Mesh Day/ Talk Transcripts",
                  overview:
                    "Transcript: Matt Klein Okay. Sure. Cool. So this is a end user panel. So while I read the questions that I was just sent aa, I’m going to let everyone introduce themselves. Okay, great. Okay. Uh, yeah. Hi, I’m snow. I work with square on their traffic and observability team, uh, been working on building out, um, are migrating us towards using an …",
                  tags: "event;talk-videos;service-mesh",
                  url: "https://www.tetrate.io/blog/smd_end_user_panel/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "21",
                  title: "CISO Panel Service Mesh Day 2019",
                  subgenre: "Service Mesh Day/ Talk Transcripts",
                  overview:
                    "Transcript: Deepak Jeevan Hi everybody. Thank you for spending lunchtime with us, humble CISOs. Uh, so we changed the analysts VC panel that’s in the printed sheet to a CISO panel. Thought it will be more interesting to, for all of you to hear from how chief security information officers, chief information security officers of different companies, uh, …",
                  tags: "event;talk-videos;service-mesh",
                  url: "https://www.tetrate.io/blog/smd_panel_ciso/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "24",
                  title: "Frederick Kautz (Doc.ai) Service Mesh Day 2019",
                  subgenre: "Service Mesh Day/ Talk Transcripts",
                  overview:
                    "Transcript: So, uh, let me start with a, so we have this project, it’s called Network Service Mesh, uh, you’ll understand why it’s called this in a moment. So, uh, first let’s start with a short story though. So we have this character named Sarah and I actually use this for most of my introductions cause it helps, uh, provide a really …",
                  tags: "event;talk-videos;service-mesh",
                  url: "https://www.tetrate.io/blog/smd_frederick_kautz/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "25",
                  title:
                    "Janna Brummel Robin van Zijll ING Service Mesh Day 2019",
                  subgenre: "Service Mesh Day/ Talk Transcripts",
                  overview:
                    "Transcript: Hi, welcome to our talk. Last ones before lunch. That’s always a bit of a challenge. Uh, our talk is a little bit different than the others. Um, we’re introducing service mesh in our organization working on a POC, so not in production yet. And we’re doing that at the same time as introducing, uh, the public cloud. And we want to …",
                  tags: "event;talk-videos;service-mesh",
                  url: "https://www.tetrate.io/blog/smd_janna_and_robin/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "28",
                  title: "Prajakta Joshi (Google) and Dhi",
                  subgenre: "Service Mesh Day/ Talk Transcripts",
                  overview:
                    "Transcript: PRAJAKTA JOSHI: So Hi folks. It’s really great to be here. I’m Prajakta, I’m a Product Manager in cloud networking in Google Cloud. And I want to invite Dhi to introduce himself. DHI AURRAHMAN: Okay. So, hi. Hi folks. My name is Dhi, I’m a Software Engineer at Tetrate. I’m an Envoy maintainer. JOSHI: Perfect. So a lot …",
                  tags: "event;talk-videos;service-mesh",
                  url: "https://www.tetrate.io/blog/smd_prajakta_joshi_dhi/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "29",
                  title: "Shriram Rajagopalan (Tetrate) Service Mesh Day 2019",
                  subgenre: "Service Mesh Day/ Talk Transcripts",
                  overview:
                    "Transcript: So you’ve seen AWS App Mesh presentation and in the afternoon you’ll actually see a presentation from the traffic director folks at Google and so on. All of these are basically, you know, manifestations of how you would deploy a service mesh across a heterogeneous environment, spanning virtual machines, your Kubernetes clusters or ECS, …",
                  tags: "event;talk-videos;service-mesh",
                  url: "https://www.tetrate.io/blog/smd_shriram/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "30",
                  title: "The 5 traits of successful service mesh adopters",
                  subgenre: "Talk Summary",
                  overview:
                    "Tetrate’s Zack Butcher gave a whirlwind session, a “Practical Guide to Istio,” at DockerCon in San Francisco last week, with one of the 5 top-rated talks at the conference. He pointed to 5 traits of successful service mesh adopters. #1. They’re focused on a single pain point. A mesh is just too big to adopt wholesale from day one. Service mesh is a tool, not …",
                  tags: "service-mesh",
                  url: "https://www.tetrate.io/blog/5-traits/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "31",
                  title:
                    "Three Myths about Service Mesh: Service Mesh Day Remarks from Tetrate CEO Varun Talwar",
                  subgenre: "Service Mesh Day / Talk Summary",
                  overview:
                    "Tetrate CEO Varun Talwar kicked off Service Mesh Day, the first ever industry conference on service mesh, with a few words about what had brought the standing-room-only crowd, from a variety of organizations and industries, together. From the 10,000-foot view, compute density is growing. Users need more compute, network and storage capacity. The shift to …",
                  tags: "event;talk-videos;service-mesh",
                  url: "https://www.tetrate.io/blog/smd_varun_talwar/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "51",
                  title: "Future of service mesh",
                  subgenre: "Talk Transcript/Summary",
                  overview:
                    "Transcript: Chris Aniszczyk Uh, let’s try to stick on time and get started. So my name is Chris Chris Aniszczyk. I have the fun job of running the cloud native computing foundation and today we’re chatting with a bunch of folks about the future of service mesh. So, uh, to get started, why don’t we do some quick introductions on the panel and …",
                  tags: "talk-videos;service-mesh",
                  url:
                    "https://www.tetrate.io/blog/smd_future_of_servicemesh_panel/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "52",
                  title: "Matt Klein at Service Mesh Day",
                  subgenre: "",
                  overview:
                    "Envoy creator Matt Klein (Lyft) advises organizations starting with service mesh to make changes incrementally, to solve problems one piece at a time.",
                  tags: "event;talk-videos;service-mesh;envoy",
                  url:
                    "https://www.youtube.com/watch?v=Lo-6x6NbUVI&feature=youtu.be"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "53",
                  title: "Chris Aniszczyk at Service Mesh Day",
                  subgenre: "",
                  overview:
                    "As companies adopt Kubernetes and reevaluate their architectures, Chris Aniszczyk, CTO/COO of the Cloud Native Computing Foundation predicts they'll look increasingly to mesh to provide observability.",
                  tags: "event;talk-videos;kubernetes;cncf;service-mesh",
                  url:
                    "https://www.youtube.com/watch?v=9O9im_nLcQQ&feature=youtu.be"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "54",
                  title: "Suresh Visvanathan at Service Mesh Day",
                  subgenre: "",
                  overview:
                    "Suresh describes how Verizon media has been using service mesh to secure traffic flow with MTLS without code changes, distribute tracing to troubleshoot, and more.",
                  tags: "event;talk-videos;service-mesh",
                  url:
                    "https://www.youtube.com/watch?v=sa8R9PD7coc&feature=youtu.be"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "55",
                  title: "David Ferraiolo at Service Mesh Day",
                  subgenre: "",
                  overview:
                    "David of NIST walks through Next Generation Access Control (NGAC), a new approach to delegating and querying access privileges with fine-grained policies.",
                  tags: "event;talk-videos;nist;ngac",
                  url: "https://www.youtube.com/watch?v=DcpfxYWwAOE"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "56",
                  title: "Louis Ryan at Service Mesh Day",
                  subgenre: "",
                  overview:
                    "Louis Ryan of Google explains how service mesh delivers flexibility and control to app developers and administrators and operators abstracting the network's control plane and enabling the enterprise.",
                  tags: "event;talk-videos;service-mesh;network",
                  url:
                    "https://www.youtube.com/watch?v=Rr3Ftm4p6nc&feature=youtu.be"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "57",
                  title: "Larry Peterson at Service Mesh Day",
                  subgenre: "",
                  overview:
                    "Larry Peterson of ONFtalks about federating service meshes and the challenges ahead for building next generation applications.",
                  tags: "event;talk-videos;service-mesh",
                  url:
                    "https://www.youtube.com/watch?v=mazZvoxxm1w&feature=youtu.be"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "59",
                  title: "An Overview of Istio Mesh",
                  subgenre: "",
                  overview:
                    "Istio: Weaving the Service Mesh. By Shriram Rajagopalan & Louis Ryan",
                  tags: "event;talk-videos;service-mesh;istio",
                  url: "https://www.youtube.com/watch?v=WFEllbmRI8U&t=1s"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "60",
                  title: "Debugging Istio Networking",
                  subgenre: "",
                  overview:
                    "Liam White explains how to debug Istio to test reliability and functions of Istio components.",
                  tags: "event;talk-videos;istio",
                  url:
                    "https://www.youtube.com/watch?v=K2mM3c11WN4&feature=youtu.be&t=4139"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "61",
                  title:
                    "Connecting, Managing, Observing, and Securing Services",
                  subgenre: "",
                  overview:
                    "Zack Butcher talks about how a service mesh helps with the transition from monoliths to microservices to empower the organization.",
                  tags: "event;talk-videos;miroservices;service-mesh",
                  url:
                    "https://www.infoq.com/presentations/service-mesh-microservices-2018/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "62",
                  title: "GitOps for Istio",
                  subgenre: "",
                  overview:
                    "Learn how to manage Istio config like managing code. Varun Talwar's Kubecon Europe 2018 talk.",
                  tags: "event;talk-videos;istio;kubecon",
                  url: "https://www.youtube.com/watch?v=VkKMf23ZokY"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "63",
                  title: "Latency Analysis with Istio & OpenCensus",
                  subgenre: "",
                  overview:
                    "Learn how to do latency and hotspot analysis in a microservices environment with Istio and Envoy integrated with OpenCensus.",
                  tags: "event;talk-videos;microservices;istio;envoy",
                  url:
                    "https://www.youtube.com/watch?v=ME-EhOKqFOY&feature=youtu.be"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "64",
                  title: "Istio - The Packet's-Eye View",
                  subgenre: "",
                  overview:
                    "A practical introduction to the operation of Istio and how it can impact your environment. Kubecon Seattle 2018 talk.",
                  tags: "event;talk-videos;kubecon;istio",
                  url:
                    "https://www.youtube.com/watch?v=zJnYuFsLHfY&feature=youtu.be"
                },
                {
                  infotype: "Podcasts",
                  infoid: "5",
                  title: "Louis Ryan & Varun Talwar Podcast",
                  subgenre: "Podcast Summary",
                  overview:
                    "The co-creators of Istio– Louis Ryan of Google and Tetrate’s Varun Talwar– talk with TC Currie on the history of Istio, how it came to exist in its current form and the collaboration between Google, IBM and Lyft that got the project off the ground. They address how the project was designed to allow businesses to solve observability issues, …",
                  tags: "podcast;istio",
                  url: "https://www.tetrate.io/blog/podcast_louis_and_varun/"
                },
                {
                  infotype: "How To",
                  infoid: "10",
                  title: "451's Take on Service Mesh",
                  subgenre: "Tech Overview",
                  overview:
                    "Analysts Jean Atelsek and William Fellows of 451 Research give their take on the role of service mesh as a cloud-native enabler, calling it a potential “Swiss Army Knife of modern-day software, solving for the most vexing challenges of distributed microservices based applications.” The role of service mesh as a cloud-native enabler is building …",
                  tags: "service-mesh;cloudnative",
                  url: "https://www.tetrate.io/blog/451/"
                },
                {
                  infotype: "How To",
                  infoid: "18",
                  title:
                    "3x Performance Improvement in SkyWalking’s recent 6.1 release",
                  subgenre: "Tech Overview",
                  overview:
                    "Apache SkyWalking, the observability analysis and application performance monitoring (APM) tool, shattered its own performance record with its recent 6.1 release. Designed especially for microservices, cloud native and container based architecture, SkyWalking provides distributed tracing, service mesh telemetry analysis, metric aggregation and workload …",
                  tags:
                    "skywalking;apache-skywalking;cloudnative;microservices;telemetry",
                  url: "https://www.tetrate.io/blog/skywalking-performance/"
                },
                {
                  infotype: "How To",
                  infoid: "32",
                  title: "The New Stack Features Apache SkyWalking",
                  subgenre: "Tech Overview",
                  overview:
                    "Apache SkyWalking, the open source APM that Tetrate has embraced as the path to observability, was featured yestreday by the New Stack, the podcast and DevOps tech blog. In “SkyWalking: APM for the Heterogeneous New Stack,” Susan Hall describes SkyWalking founder Sheng Wu– who is now a Tetrate engineer– grew SkyWalking in just four years from a …",
                  tags: "skywalking;apache-skywalking;devops",
                  url:
                    "https://www.tetrate.io/blog/new-stack-features-skywalking/"
                },
                {
                  infotype: "How To",
                  infoid: "35",
                  title: "SkyWalking Graduates as an Apache Top Level Project",
                  subgenre: "Tech Overview",
                  overview:
                    "Tetrate congratulates its own Sheng Wu, founder of SkyWalking Apache SkyWalking, the observability analysis and application performance monitoring (APM) tool built especially for microservices, cloud-native and container-based architectures, has graduated as an Apache Top Level Project. Founded by Tetrate’s Sheng Wu, SkyWalking was originally created as an …",
                  tags: "skywalking;apache-skywalking",
                  url:
                    "https://www.tetrate.io/blog/skywalking-graduates-as-top-level-project/"
                },
                {
                  infotype: "How To",
                  infoid: "37",
                  title: "Tetrate Networkless Mesh",
                  subgenre: "Tech Overview",
                  overview:
                    "The Service Mesh Day has been an amazing conference. From the beginning to the end, attendees could enjoy high-quality technical sessions combined with inspirational talks and visions on the future. We have been humbled by the good acceptance it has had, and listened to the inquires and struggles people are facing when trying to modernize their …",
                  tags: "service-mesh",
                  url: "https://www.tetrate.io/blog/tetrate-networkless/"
                },
                {
                  infotype: "How To",
                  infoid: "44",
                  title:
                    "Case Study: Tetrate Resolves the Complexities of NAV's Transition to Istio",
                  subgenre: "Case Study",
                  overview:
                    "About Norwegian Labour and Welfare Administration (NAV) The Norwegian Labour and Welfare Administration (NAV) is the government directorate responsible for implementing Norway’s welfare model, with services ranging from child benefits to pensions. NAV is responsible for distributing a third of Norway’s national budget. In five years, it’s estimated that 95% …",
                  tags: "customer-case-study;istio",
                  url:
                    "https://www.tetrate.io/blog/case-study-tetrate-resolves-the-complexities-of-navs-transition-to-istio/"
                },
                {
                  infotype: "How To",
                  infoid: "45",
                  title: "SkyWalking V6 Is Service Mesh Ready",
                  subgenre: "Tech Overview",
                  overview:
                    "Context: The integration of SkyWalking and Istio Service Mesh yields an essential open-source tool for resolving the chaos created by the proliferation of siloed, cloud-based services. Apache SkyWalking is an open, modern performance management tool for distributed services, designed especially for microservices, cloud native and container-based (Docker, K8s, …",
                  tags:
                    "skywalking;service-mesh;istio;apache-skywalking;microservices;cloudnative",
                  url:
                    "https://www.tetrate.io/blog/skywalking-v6-is-service-mesh-ready/"
                },
                {
                  infotype: "How To",
                  infoid: "46",
                  title: "Tetrate Istio Cloud Map Operator",
                  subgenre: "Tech Overview",
                  overview:
                    "AWS recently announced Cloud Map, a Service Discovery service that allows you to define friendly names for your cloud resources so that your applications can quickly discover the relevant endpoints associated with them. In Istio, you register services that are external to your mesh to allow services in your mesh to route to them, this is done via an Istio …",
                  tags: "aws;istio;service-mesh",
                  url:
                    "https://www.tetrate.io/blog/tetrate-istio-cloud-map-operator/"
                },
                {
                  infotype: "How To",
                  infoid: "47",
                  title: "gRPC Transcoding With Istio",
                  subgenre: "Tech Tutorial",
                  overview:
                    "There are a lot of advantages to using gRPC instead of HTTP/JSON when building new APIs, like HTTP/2, streaming, cross-language support, server push, etc. The hardest part tends to be legacy services that expect HTTP/JSON. This is why gRPC-JSON transcoding is so attractive: we can implement gRPC servers but expose them to legacy services with a HTTP/JSON …",
                  tags: "grpc;istio",
                  url:
                    "https://www.tetrate.io/blog/grpc-transcoding-with-istio/"
                },
                {
                  infotype: "How To",
                  infoid: "48",
                  title: "Multi-Cluster Communication – a Multi-Mesh Approach",
                  subgenre: "Tech Overview",
                  overview:
                    "Current solutions for cross-cluster networking all use VPNs and a single control plane, with all the failure and latency problems that result. At Tetrate we’ve designed a scheme for using one Istio mesh per cluster to do cross-cluster routing. This post presents an open-source tool, Coddiwomple, which automates generation of the Istio config needed to enact …",
                  tags: "multi-cluster;multi-mesh;istio;service-mesh",
                  url:
                    "https://www.tetrate.io/blog/multi-cluster-communication-a-multi-mesh-approach/"
                },
                {
                  infotype: "How To",
                  infoid: "49",
                  title: "Getting Started With Istio on Amazon EKS",
                  subgenre: "Tech Tutorial (External)",
                  overview:
                    "In this post, commissioned for the AWS Open Source blog, Tetrate’s Matt Turner writes the first of a series introducing Istio and its use on Amazon’s EKS. Posted externally",
                  tags: "amazon-eks;aws;istio",
                  url:
                    "https://www.tetrate.io/blog/getting-started-with-istio-on-amazon-eks/"
                },
                {
                  infotype: "How To",
                  infoid: "50",
                  title: "Istio 1 0 Nightly on Eks",
                  subgenre: "Tech Tutorial",
                  overview:
                    "The Amazon Elastic Container Service for Kubernetes, EKS, is the long-awaited hosted Kubernetes offering from AWS. It offers managed Kubernetes 1.10 clusters, and is currently GA in two regions in North America. Building on Kubernetes, Istio is a service mesh that provides “An open platform to connect, manage, and secure microservices.” Here at Tetrate we’re …",
                  tags:
                    "kubernetes;aws;istio;service-mesh;microservices;amazon-eks",
                  url: "https://www.tetrate.io/blog/istio-1-0-nightly-on-eks/"
                },
                {
                  infotype: "Other Info",
                  infoid: "8",
                  title: "Istio: Up and running",
                  subgenre: "Book Announcement",
                  overview:
                    "A Practical Guide to Istio You’ve been in a loud living room at some point, fussing with a pile of identical clickers, trying to turn down the volume. In IT, you know you need service mesh the way you know you need a universal remote. Your system is large, distributed, and unwieldy. Your services are running in heterogeneous environments. Your cloud native …",
                  tags: "book;istio",
                  url: "https://www.tetrate.io/blog/uprunning/"
                },
                {
                  infotype: "Other Info",
                  infoid: "42",
                  title: "Press Release - Service Mesh Day 2019",
                  subgenre: "Press Release",
                  overview:
                    "Tetrate Hosts First-Ever Service Mesh Industry Conference with Service Mesh Day 2019 Creators of Istio and Envoy Headline Event on March 28 and 29 in San Francisco Exploring Application of Service Mesh to Accelerate Digital Transformation SAN FRANCISCO – March 19, 2019 – Tetrate, the enterprise service mesh company, is proud to announce details of Service …",
                  tags: "company-news;event;service-mesh;istio;envoy",
                  url:
                    "https://www.tetrate.io/blog/press-release-service-mesh-day-2019/"
                },
                {
                  infotype: "Other Info",
                  infoid: "43",
                  title: "Press Release – Tetrate Launch",
                  subgenre: "Press Release",
                  overview:
                    "Key Contributors of Envoy and Istio Projects Launch Tetrate with $12.5M in Funding to Create Enterprise-Grade Service Mesh SAN FRANCISCO – March 13, 2019 – Tetrate, the enterprise service mesh company, today launched with $12.5M in funding, led by Dell Technologies Capital with participation from 8VC, Intel Capital, Rain Capital and Samsung NEXT. The funding …",
                  tags: "company-news;envoy;istio",
                  url: "https://www.tetrate.io/blog/press-release/"
                }
              ]
            },
            {
              infotype: "Events",
              info: []
            },
            {
              infotype: "Talk Videos",
              info: []
            },
            {
              infotype: "Podcasts",
              info: []
            },
            {
              infotype: "How To",
              info: []
            },
            {
              infotype: "Other Info",
              info: []
            }
          ]
        },
        {
          diagid: "L0-A",
          nodeid: 6,
          nodetype: "Deep Dive",
          caption: "...    (Operate Plane Deep Dive)",
          overview: "",
          tags: "envoy;getenvoy;kubernetes;multi-cluster;aws",
          infotypes: [
            {
              infotype: "Events",
              info: [
                {
                  infotype: "Events",
                  infoid: "9",
                  title: "Tetrate at KubeCon San Diego",
                  subgenre: "Event Summary",
                  overview:
                    "Going to KubeCon San Diego? Visit us at Booth SE65. KubeCon is just 2 weeks away, and Tetrate is excited to be sending our engineers, including top Istio and Envoy contributors. Look for the newly released Istio roadmap, Istio Up and Running, by Lee Calcote and our own Zack Butcher. And stop by and ask us anything about bridging legacy with cloud native. …",
                  tags: "event;istio;envoy;kubecon",
                  url: "https://www.tetrate.io/blog/kubeconsd/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "27",
                  title:
                    "Matt Klein at Tetrate's Service Mesh Day 2019: Envoy as the standard data plane and where it's going",
                  subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                  overview:
                    "Matt Klein, the creator of Envoy, says he had greatly underestimated the market demand for a proxy that could be used in a generic way. The Lyft software engineer wrote Envoy as a “communication bus” to handle issues like rate limiting, circuit breaking, and load balancing. It facilitates network-transparent applications and allows developers to focus on …",
                  tags: "event;alk-videos;envoy",
                  url: "https://www.tetrate.io/blog/smd_matt_klein/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "52",
                  title: "Matt Klein at Service Mesh Day",
                  subgenre: "",
                  overview:
                    "Envoy creator Matt Klein (Lyft) advises organizations starting with service mesh to make changes incrementally, to solve problems one piece at a time.",
                  tags: "event;talk-videos;service-mesh;envoy",
                  url:
                    "https://www.youtube.com/watch?v=Lo-6x6NbUVI&feature=youtu.be"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "53",
                  title: "Chris Aniszczyk at Service Mesh Day",
                  subgenre: "",
                  overview:
                    "As companies adopt Kubernetes and reevaluate their architectures, Chris Aniszczyk, CTO/COO of the Cloud Native Computing Foundation predicts they'll look increasingly to mesh to provide observability.",
                  tags: "event;talk-videos;kubernetes;cncf;service-mesh",
                  url:
                    "https://www.youtube.com/watch?v=9O9im_nLcQQ&feature=youtu.be"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "63",
                  title: "Latency Analysis with Istio & OpenCensus",
                  subgenre: "",
                  overview:
                    "Learn how to do latency and hotspot analysis in a microservices environment with Istio and Envoy integrated with OpenCensus.",
                  tags: "event;talk-videos;microservices;istio;envoy",
                  url:
                    "https://www.youtube.com/watch?v=ME-EhOKqFOY&feature=youtu.be"
                },
                {
                  infotype: "How To",
                  infoid: "11",
                  title: "Announcing GetEnvoy",
                  subgenre: "Tech Overview",
                  overview:
                    "Why Envoy Proxy If you’re running a large, distributed architecture, you’ve probably heard of Envoy, if not pored over its features for controlling, securing and monitoring a system with unwieldy, heterogeneous components. A quick walkthrough, if you haven’t: Originally built at Lyft, Envoy is an open source, edge and service proxy that abstracts the …",
                  tags: "getenvoy;envoy;proxy",
                  url:
                    "https://www.tetrate.io/blog/announcing-the-getenvoy-project/"
                },
                {
                  infotype: "How To",
                  infoid: "15",
                  title: "The Basics of Envoy and Envoy Extensibility",
                  subgenre: "Tech Overview",
                  overview:
                    "In his 2019 talks at KubeCon Barcelona, Tetrate Engineer and Envoy Senior Maintainer Lizan Zhou presented an overview of Envoy and a deep dive into its extensibility. The service proxy solves a host of operational problems related to observability and networking in large distributed systems, and its extensibility allows it to be adapted to a large variety of …",
                  tags: "kubecon;envoy",
                  url:
                    "https://www.tetrate.io/blog/envoybasicsandextensibility/"
                },
                {
                  infotype: "How To",
                  infoid: "36",
                  title: "Envoy CVE security fixes for GetEnvoy",
                  subgenre: "Tech Overview",
                  overview:
                    "The Envoy security team today [announced]() the availability of Envoy 1.9.1 to address two high-risk vulnerabilities related to header values and HTTP URL paths. We also released the GetEnvoy build of Envoy 1.9.1 and the latest master build that fixes the vulnerability. Users are encouraged to upgrade to 1.9.1 or latest master build to address the following …",
                  tags: "getenvoy;envoy",
                  url:
                    "https://www.tetrate.io/blog/security-fixes-for-getenvoy/"
                },
                {
                  infotype: "How To",
                  infoid: "46",
                  title: "Tetrate Istio Cloud Map Operator",
                  subgenre: "Tech Overview",
                  overview:
                    "AWS recently announced Cloud Map, a Service Discovery service that allows you to define friendly names for your cloud resources so that your applications can quickly discover the relevant endpoints associated with them. In Istio, you register services that are external to your mesh to allow services in your mesh to route to them, this is done via an Istio …",
                  tags: "aws;istio;service-mesh",
                  url:
                    "https://www.tetrate.io/blog/tetrate-istio-cloud-map-operator/"
                },
                {
                  infotype: "How To",
                  infoid: "48",
                  title: "Multi-Cluster Communication – a Multi-Mesh Approach",
                  subgenre: "Tech Overview",
                  overview:
                    "Current solutions for cross-cluster networking all use VPNs and a single control plane, with all the failure and latency problems that result. At Tetrate we’ve designed a scheme for using one Istio mesh per cluster to do cross-cluster routing. This post presents an open-source tool, Coddiwomple, which automates generation of the Istio config needed to enact …",
                  tags: "multi-cluster;multi-mesh;istio;service-mesh",
                  url:
                    "https://www.tetrate.io/blog/multi-cluster-communication-a-multi-mesh-approach/"
                },
                {
                  infotype: "How To",
                  infoid: "49",
                  title: "Getting Started With Istio on Amazon EKS",
                  subgenre: "Tech Tutorial (External)",
                  overview:
                    "In this post, commissioned for the AWS Open Source blog, Tetrate’s Matt Turner writes the first of a series introducing Istio and its use on Amazon’s EKS. Posted externally",
                  tags: "amazon-eks;aws;istio",
                  url:
                    "https://www.tetrate.io/blog/getting-started-with-istio-on-amazon-eks/"
                },
                {
                  infotype: "How To",
                  infoid: "50",
                  title: "Istio 1 0 Nightly on Eks",
                  subgenre: "Tech Tutorial",
                  overview:
                    "The Amazon Elastic Container Service for Kubernetes, EKS, is the long-awaited hosted Kubernetes offering from AWS. It offers managed Kubernetes 1.10 clusters, and is currently GA in two regions in North America. Building on Kubernetes, Istio is a service mesh that provides “An open platform to connect, manage, and secure microservices.” Here at Tetrate we’re …",
                  tags:
                    "kubernetes;aws;istio;service-mesh;microservices;amazon-eks",
                  url: "https://www.tetrate.io/blog/istio-1-0-nightly-on-eks/"
                },
                {
                  infotype: "Other Info",
                  infoid: "38",
                  title: "Introducing Tetrate Q",
                  subgenre: "Product",
                  overview:
                    "The modern enterprise infrastructure is a mishmash of legacy infrastructure, SaaS services, a smattering of cloud-native platforms like Kubernetes, along with an aging access control system that struggles to keep up with all the changes in the enterprise as it marches toward modernization. We no longer live in a world where the infrastructure is full of pets …",
                  tags: "tetrateq;kubernetes;cloudnative",
                  url: "https://www.tetrate.io/blog/introducing-tetrate-q/"
                },
                {
                  infotype: "Other Info",
                  infoid: "39",
                  title:
                    "Announcing AWS-Tetrate partnership to bring enterprise grade Envoy to App Mesh users",
                  subgenre: "Press Release",
                  overview:
                    "Today we announced an exciting partnership with AWS AppMesh. Tetrate GetEnvoy, which provides certified builds of Envoy, can now be used by customers of AWS App Mesh with EC2, ECS and EKS. This enables customers to have one set of verified and approved builds of Envoy across their data center and AWS. “Today, many customers are running applications on the …",
                  tags: "aws;getenvoy;envoy;amazon-eks;amazon-app-mesh",
                  url:
                    "https://www.tetrate.io/blog/appmesh-tetrate-integration/"
                },
                {
                  infotype: "Other Info",
                  infoid: "40",
                  title:
                    "Press Release Tetrate Works With Amazon Web Services to Bring Enterprise Grade Envoy to Aws App Mesh Users",
                  subgenre: "Press Release",
                  overview:
                    "Support for AWS App Mesh will be showcased for the first time at ​Service Mesh Day on March 29, 2019 in San Francisco SAN FRANCISCO – March 27, 2019 – Tetrate​, the ​recently launched​ enterprise service mesh company, today announced its support for the launch of Amazon Web Services (AWS) App Mesh, a cloud service that makes it easy to run microservices by …",
                  tags: "company-news;envoy;getenvoy;amazon-app-mesh;aws",
                  url:
                    "https://www.tetrate.io/blog/press-release-tetrate-works-with-amazon-web-services-to-bring-enterprise-grade-envoy-to-aws-app-mesh-users/"
                },
                {
                  infotype: "Other Info",
                  infoid: "42",
                  title: "Press Release - Service Mesh Day 2019",
                  subgenre: "Press Release",
                  overview:
                    "Tetrate Hosts First-Ever Service Mesh Industry Conference with Service Mesh Day 2019 Creators of Istio and Envoy Headline Event on March 28 and 29 in San Francisco Exploring Application of Service Mesh to Accelerate Digital Transformation SAN FRANCISCO – March 19, 2019 – Tetrate, the enterprise service mesh company, is proud to announce details of Service …",
                  tags: "company-news;event;service-mesh;istio;envoy",
                  url:
                    "https://www.tetrate.io/blog/press-release-service-mesh-day-2019/"
                },
                {
                  infotype: "Other Info",
                  infoid: "43",
                  title: "Press Release – Tetrate Launch",
                  subgenre: "Press Release",
                  overview:
                    "Key Contributors of Envoy and Istio Projects Launch Tetrate with $12.5M in Funding to Create Enterprise-Grade Service Mesh SAN FRANCISCO – March 13, 2019 – Tetrate, the enterprise service mesh company, today launched with $12.5M in funding, led by Dell Technologies Capital with participation from 8VC, Intel Capital, Rain Capital and Samsung NEXT. The funding …",
                  tags: "company-news;envoy;istio",
                  url: "https://www.tetrate.io/blog/press-release/"
                }
              ]
            },
            {
              infotype: "Talk Videos",
              info: []
            },
            {
              infotype: "How To",
              info: []
            },
            {
              infotype: "Other Info",
              info: []
            }
          ]
        },
        {
          diagid: "L0-A",
          nodeid: 7,
          nodetype: "Level Counter",
          caption: "Increase Level",
          overview: "",
          tags: "",
          infotypes: []
        }
      ]
    },
    {
      diagramid: "L1-A",
      title: "Level 1 - Overall View",
      overview: "",
      objects: [
        {
          diagid: "L1-A",
          nodeid: 8,
          nodetype: "Component",
          caption: "TSB UI",
          overview: "",
          tags: ""
        },
        {
          diagid: "L1-A",
          nodeid: 9,
          nodetype: "Component",
          caption: "Workflow Server",
          overview: "",
          tags: "",
          infotypes: []
        },
        {
          diagid: "L1-A",
          nodeid: 10,
          nodetype: "Component",
          caption: "API Server",
          overview: "",
          tags: "",
          infotypes: []
        },
        {
          diagid: "L1-A",
          nodeid: 11,
          nodetype: "Component",
          caption: "SkyWalking",
          overview: "",
          tags: "skywalking;apache-skywalking",
          infotypes: [
            {
              infotype: "How To",
              info: [
                {
                  infotype: "How To",
                  infoid: "18",
                  title:
                    "3x Performance Improvement in SkyWalking’s recent 6.1 release",
                  subgenre: "Tech Overview",
                  overview:
                    "Apache SkyWalking, the observability analysis and application performance monitoring (APM) tool, shattered its own performance record with its recent 6.1 release. Designed especially for microservices, cloud native and container based architecture, SkyWalking provides distributed tracing, service mesh telemetry analysis, metric aggregation and workload …",
                  tags:
                    "skywalking;apache-skywalking;cloudnative;microservices;telemetry",
                  url: "https://www.tetrate.io/blog/skywalking-performance/"
                },
                {
                  infotype: "How To",
                  infoid: "32",
                  title: "The New Stack Features Apache SkyWalking",
                  subgenre: "Tech Overview",
                  overview:
                    "Apache SkyWalking, the open source APM that Tetrate has embraced as the path to observability, was featured yestreday by the New Stack, the podcast and DevOps tech blog. In “SkyWalking: APM for the Heterogeneous New Stack,” Susan Hall describes SkyWalking founder Sheng Wu– who is now a Tetrate engineer– grew SkyWalking in just four years from a …",
                  tags: "skywalking;apache-skywalking;devops",
                  url:
                    "https://www.tetrate.io/blog/new-stack-features-skywalking/"
                },
                {
                  infotype: "How To",
                  infoid: "35",
                  title: "SkyWalking Graduates as an Apache Top Level Project",
                  subgenre: "Tech Overview",
                  overview:
                    "Tetrate congratulates its own Sheng Wu, founder of SkyWalking Apache SkyWalking, the observability analysis and application performance monitoring (APM) tool built especially for microservices, cloud-native and container-based architectures, has graduated as an Apache Top Level Project. Founded by Tetrate’s Sheng Wu, SkyWalking was originally created as an …",
                  tags: "skywalking;apache-skywalking",
                  url:
                    "https://www.tetrate.io/blog/skywalking-graduates-as-top-level-project/"
                },
                {
                  infotype: "How To",
                  infoid: "45",
                  title: "SkyWalking V6 Is Service Mesh Ready",
                  subgenre: "Tech Overview",
                  overview:
                    "Context: The integration of SkyWalking and Istio Service Mesh yields an essential open-source tool for resolving the chaos created by the proliferation of siloed, cloud-based services. Apache SkyWalking is an open, modern performance management tool for distributed services, designed especially for microservices, cloud native and container-based (Docker, K8s, …",
                  tags:
                    "skywalking;service-mesh;istio;apache-skywalking;microservices;cloudnative",
                  url:
                    "https://www.tetrate.io/blog/skywalking-v6-is-service-mesh-ready/"
                }
              ]
            }
          ]
        },
        {
          diagid: "L1-A",
          nodeid: 12,
          nodetype: "Component",
          caption: "TSB D",
          overview: "",
          tags: "",
          infotypes: []
        },
        {
          diagid: "L1-A",
          nodeid: 13,
          nodetype: "Component",
          caption: "Galley",
          overview: "",
          tags: "",
          infotypes: []
        },
        {
          diagid: "L1-A",
          nodeid: 14,
          nodetype: "Component",
          caption: "Pilot",
          overview: "",
          tags: "",
          infotypes: []
        },
        {
          diagid: "L1-A",
          nodeid: 15,
          nodetype: "Component",
          caption: "Citadel",
          overview: "",
          tags: "",
          infotypes: []
        },
        {
          diagid: "L1-A",
          nodeid: 16,
          nodetype: "Component",
          caption: "SkyWalking",
          overview: "",
          tags: "skywalking;apache-skywalking",
          infotypes: [
            {
              infotype: "How To",
              info: [
                {
                  infotype: "How To",
                  infoid: "18",
                  title:
                    "3x Performance Improvement in SkyWalking’s recent 6.1 release",
                  subgenre: "Tech Overview",
                  overview:
                    "Apache SkyWalking, the observability analysis and application performance monitoring (APM) tool, shattered its own performance record with its recent 6.1 release. Designed especially for microservices, cloud native and container based architecture, SkyWalking provides distributed tracing, service mesh telemetry analysis, metric aggregation and workload …",
                  tags:
                    "skywalking;apache-skywalking;cloudnative;microservices;telemetry",
                  url: "https://www.tetrate.io/blog/skywalking-performance/"
                },
                {
                  infotype: "How To",
                  infoid: "32",
                  title: "The New Stack Features Apache SkyWalking",
                  subgenre: "Tech Overview",
                  overview:
                    "Apache SkyWalking, the open source APM that Tetrate has embraced as the path to observability, was featured yestreday by the New Stack, the podcast and DevOps tech blog. In “SkyWalking: APM for the Heterogeneous New Stack,” Susan Hall describes SkyWalking founder Sheng Wu– who is now a Tetrate engineer– grew SkyWalking in just four years from a …",
                  tags: "skywalking;apache-skywalking;devops",
                  url:
                    "https://www.tetrate.io/blog/new-stack-features-skywalking/"
                },
                {
                  infotype: "How To",
                  infoid: "35",
                  title: "SkyWalking Graduates as an Apache Top Level Project",
                  subgenre: "Tech Overview",
                  overview:
                    "Tetrate congratulates its own Sheng Wu, founder of SkyWalking Apache SkyWalking, the observability analysis and application performance monitoring (APM) tool built especially for microservices, cloud-native and container-based architectures, has graduated as an Apache Top Level Project. Founded by Tetrate’s Sheng Wu, SkyWalking was originally created as an …",
                  tags: "skywalking;apache-skywalking",
                  url:
                    "https://www.tetrate.io/blog/skywalking-graduates-as-top-level-project/"
                },
                {
                  infotype: "How To",
                  infoid: "45",
                  title: "SkyWalking V6 Is Service Mesh Ready",
                  subgenre: "Tech Overview",
                  overview:
                    "Context: The integration of SkyWalking and Istio Service Mesh yields an essential open-source tool for resolving the chaos created by the proliferation of siloed, cloud-based services. Apache SkyWalking is an open, modern performance management tool for distributed services, designed especially for microservices, cloud native and container-based (Docker, K8s, …",
                  tags:
                    "skywalking;service-mesh;istio;apache-skywalking;microservices;cloudnative",
                  url:
                    "https://www.tetrate.io/blog/skywalking-v6-is-service-mesh-ready/"
                }
              ]
            }
          ]
        },
        {
          diagid: "L1-A",
          nodeid: 17,
          nodetype: "Component",
          caption: "Envoy-Loadbalancer",
          overview: "",
          tags: "get-envoy;envoy",
          infotypes: [
            {
              infotype: "Events",
              info: [
                {
                  infotype: "Events",
                  infoid: "9",
                  title: "Tetrate at KubeCon San Diego",
                  subgenre: "Event Summary",
                  overview:
                    "Going to KubeCon San Diego? Visit us at Booth SE65. KubeCon is just 2 weeks away, and Tetrate is excited to be sending our engineers, including top Istio and Envoy contributors. Look for the newly released Istio roadmap, Istio Up and Running, by Lee Calcote and our own Zack Butcher. And stop by and ask us anything about bridging legacy with cloud native. …",
                  tags: "event;istio;envoy;kubecon",
                  url: "https://www.tetrate.io/blog/kubeconsd/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "27",
                  title:
                    "Matt Klein at Tetrate's Service Mesh Day 2019: Envoy as the standard data plane and where it's going",
                  subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                  overview:
                    "Matt Klein, the creator of Envoy, says he had greatly underestimated the market demand for a proxy that could be used in a generic way. The Lyft software engineer wrote Envoy as a “communication bus” to handle issues like rate limiting, circuit breaking, and load balancing. It facilitates network-transparent applications and allows developers to focus on …",
                  tags: "event;alk-videos;envoy",
                  url: "https://www.tetrate.io/blog/smd_matt_klein/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "52",
                  title: "Matt Klein at Service Mesh Day",
                  subgenre: "",
                  overview:
                    "Envoy creator Matt Klein (Lyft) advises organizations starting with service mesh to make changes incrementally, to solve problems one piece at a time.",
                  tags: "event;talk-videos;service-mesh;envoy",
                  url:
                    "https://www.youtube.com/watch?v=Lo-6x6NbUVI&feature=youtu.be"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "63",
                  title: "Latency Analysis with Istio & OpenCensus",
                  subgenre: "",
                  overview:
                    "Learn how to do latency and hotspot analysis in a microservices environment with Istio and Envoy integrated with OpenCensus.",
                  tags: "event;talk-videos;microservices;istio;envoy",
                  url:
                    "https://www.youtube.com/watch?v=ME-EhOKqFOY&feature=youtu.be"
                },
                {
                  infotype: "How To",
                  infoid: "11",
                  title: "Announcing GetEnvoy",
                  subgenre: "Tech Overview",
                  overview:
                    "Why Envoy Proxy If you’re running a large, distributed architecture, you’ve probably heard of Envoy, if not pored over its features for controlling, securing and monitoring a system with unwieldy, heterogeneous components. A quick walkthrough, if you haven’t: Originally built at Lyft, Envoy is an open source, edge and service proxy that abstracts the …",
                  tags: "getenvoy;envoy;proxy",
                  url:
                    "https://www.tetrate.io/blog/announcing-the-getenvoy-project/"
                },
                {
                  infotype: "How To",
                  infoid: "15",
                  title: "The Basics of Envoy and Envoy Extensibility",
                  subgenre: "Tech Overview",
                  overview:
                    "In his 2019 talks at KubeCon Barcelona, Tetrate Engineer and Envoy Senior Maintainer Lizan Zhou presented an overview of Envoy and a deep dive into its extensibility. The service proxy solves a host of operational problems related to observability and networking in large distributed systems, and its extensibility allows it to be adapted to a large variety of …",
                  tags: "kubecon;envoy",
                  url:
                    "https://www.tetrate.io/blog/envoybasicsandextensibility/"
                },
                {
                  infotype: "How To",
                  infoid: "36",
                  title: "Envoy CVE security fixes for GetEnvoy",
                  subgenre: "Tech Overview",
                  overview:
                    "The Envoy security team today [announced]() the availability of Envoy 1.9.1 to address two high-risk vulnerabilities related to header values and HTTP URL paths. We also released the GetEnvoy build of Envoy 1.9.1 and the latest master build that fixes the vulnerability. Users are encouraged to upgrade to 1.9.1 or latest master build to address the following …",
                  tags: "getenvoy;envoy",
                  url:
                    "https://www.tetrate.io/blog/security-fixes-for-getenvoy/"
                },
                {
                  infotype: "Other Info",
                  infoid: "39",
                  title:
                    "Announcing AWS-Tetrate partnership to bring enterprise grade Envoy to App Mesh users",
                  subgenre: "Press Release",
                  overview:
                    "Today we announced an exciting partnership with AWS AppMesh. Tetrate GetEnvoy, which provides certified builds of Envoy, can now be used by customers of AWS App Mesh with EC2, ECS and EKS. This enables customers to have one set of verified and approved builds of Envoy across their data center and AWS. “Today, many customers are running applications on the …",
                  tags: "aws;getenvoy;envoy;amazon-eks;amazon-app-mesh",
                  url:
                    "https://www.tetrate.io/blog/appmesh-tetrate-integration/"
                },
                {
                  infotype: "Other Info",
                  infoid: "40",
                  title:
                    "Press Release Tetrate Works With Amazon Web Services to Bring Enterprise Grade Envoy to Aws App Mesh Users",
                  subgenre: "Press Release",
                  overview:
                    "Support for AWS App Mesh will be showcased for the first time at ​Service Mesh Day on March 29, 2019 in San Francisco SAN FRANCISCO – March 27, 2019 – Tetrate​, the ​recently launched​ enterprise service mesh company, today announced its support for the launch of Amazon Web Services (AWS) App Mesh, a cloud service that makes it easy to run microservices by …",
                  tags: "company-news;envoy;getenvoy;amazon-app-mesh;aws",
                  url:
                    "https://www.tetrate.io/blog/press-release-tetrate-works-with-amazon-web-services-to-bring-enterprise-grade-envoy-to-aws-app-mesh-users/"
                },
                {
                  infotype: "Other Info",
                  infoid: "42",
                  title: "Press Release - Service Mesh Day 2019",
                  subgenre: "Press Release",
                  overview:
                    "Tetrate Hosts First-Ever Service Mesh Industry Conference with Service Mesh Day 2019 Creators of Istio and Envoy Headline Event on March 28 and 29 in San Francisco Exploring Application of Service Mesh to Accelerate Digital Transformation SAN FRANCISCO – March 19, 2019 – Tetrate, the enterprise service mesh company, is proud to announce details of Service …",
                  tags: "company-news;event;service-mesh;istio;envoy",
                  url:
                    "https://www.tetrate.io/blog/press-release-service-mesh-day-2019/"
                },
                {
                  infotype: "Other Info",
                  infoid: "43",
                  title: "Press Release – Tetrate Launch",
                  subgenre: "Press Release",
                  overview:
                    "Key Contributors of Envoy and Istio Projects Launch Tetrate with $12.5M in Funding to Create Enterprise-Grade Service Mesh SAN FRANCISCO – March 13, 2019 – Tetrate, the enterprise service mesh company, today launched with $12.5M in funding, led by Dell Technologies Capital with participation from 8VC, Intel Capital, Rain Capital and Samsung NEXT. The funding …",
                  tags: "company-news;envoy;istio",
                  url: "https://www.tetrate.io/blog/press-release/"
                }
              ]
            },
            {
              infotype: "Talk Videos",
              info: []
            },
            {
              infotype: "How To",
              info: []
            },
            {
              infotype: "Other Info",
              info: []
            }
          ]
        },
        {
          diagid: "L1-A",
          nodeid: 18,
          nodetype: "Component",
          caption: "Envoy-Proxy",
          overview: "",
          tags: "get-envoy;envoy;proxy",
          infotypes: [
            {
              infotype: "Events",
              info: [
                {
                  infotype: "Events",
                  infoid: "9",
                  title: "Tetrate at KubeCon San Diego",
                  subgenre: "Event Summary",
                  overview:
                    "Going to KubeCon San Diego? Visit us at Booth SE65. KubeCon is just 2 weeks away, and Tetrate is excited to be sending our engineers, including top Istio and Envoy contributors. Look for the newly released Istio roadmap, Istio Up and Running, by Lee Calcote and our own Zack Butcher. And stop by and ask us anything about bridging legacy with cloud native. …",
                  tags: "event;istio;envoy;kubecon",
                  url: "https://www.tetrate.io/blog/kubeconsd/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "27",
                  title:
                    "Matt Klein at Tetrate's Service Mesh Day 2019: Envoy as the standard data plane and where it's going",
                  subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                  overview:
                    "Matt Klein, the creator of Envoy, says he had greatly underestimated the market demand for a proxy that could be used in a generic way. The Lyft software engineer wrote Envoy as a “communication bus” to handle issues like rate limiting, circuit breaking, and load balancing. It facilitates network-transparent applications and allows developers to focus on …",
                  tags: "event;alk-videos;envoy",
                  url: "https://www.tetrate.io/blog/smd_matt_klein/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "52",
                  title: "Matt Klein at Service Mesh Day",
                  subgenre: "",
                  overview:
                    "Envoy creator Matt Klein (Lyft) advises organizations starting with service mesh to make changes incrementally, to solve problems one piece at a time.",
                  tags: "event;talk-videos;service-mesh;envoy",
                  url:
                    "https://www.youtube.com/watch?v=Lo-6x6NbUVI&feature=youtu.be"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "63",
                  title: "Latency Analysis with Istio & OpenCensus",
                  subgenre: "",
                  overview:
                    "Learn how to do latency and hotspot analysis in a microservices environment with Istio and Envoy integrated with OpenCensus.",
                  tags: "event;talk-videos;microservices;istio;envoy",
                  url:
                    "https://www.youtube.com/watch?v=ME-EhOKqFOY&feature=youtu.be"
                },
                {
                  infotype: "How To",
                  infoid: "11",
                  title: "Announcing GetEnvoy",
                  subgenre: "Tech Overview",
                  overview:
                    "Why Envoy Proxy If you’re running a large, distributed architecture, you’ve probably heard of Envoy, if not pored over its features for controlling, securing and monitoring a system with unwieldy, heterogeneous components. A quick walkthrough, if you haven’t: Originally built at Lyft, Envoy is an open source, edge and service proxy that abstracts the …",
                  tags: "getenvoy;envoy;proxy",
                  url:
                    "https://www.tetrate.io/blog/announcing-the-getenvoy-project/"
                },
                {
                  infotype: "How To",
                  infoid: "15",
                  title: "The Basics of Envoy and Envoy Extensibility",
                  subgenre: "Tech Overview",
                  overview:
                    "In his 2019 talks at KubeCon Barcelona, Tetrate Engineer and Envoy Senior Maintainer Lizan Zhou presented an overview of Envoy and a deep dive into its extensibility. The service proxy solves a host of operational problems related to observability and networking in large distributed systems, and its extensibility allows it to be adapted to a large variety of …",
                  tags: "kubecon;envoy",
                  url:
                    "https://www.tetrate.io/blog/envoybasicsandextensibility/"
                },
                {
                  infotype: "How To",
                  infoid: "36",
                  title: "Envoy CVE security fixes for GetEnvoy",
                  subgenre: "Tech Overview",
                  overview:
                    "The Envoy security team today [announced]() the availability of Envoy 1.9.1 to address two high-risk vulnerabilities related to header values and HTTP URL paths. We also released the GetEnvoy build of Envoy 1.9.1 and the latest master build that fixes the vulnerability. Users are encouraged to upgrade to 1.9.1 or latest master build to address the following …",
                  tags: "getenvoy;envoy",
                  url:
                    "https://www.tetrate.io/blog/security-fixes-for-getenvoy/"
                },
                {
                  infotype: "Other Info",
                  infoid: "39",
                  title:
                    "Announcing AWS-Tetrate partnership to bring enterprise grade Envoy to App Mesh users",
                  subgenre: "Press Release",
                  overview:
                    "Today we announced an exciting partnership with AWS AppMesh. Tetrate GetEnvoy, which provides certified builds of Envoy, can now be used by customers of AWS App Mesh with EC2, ECS and EKS. This enables customers to have one set of verified and approved builds of Envoy across their data center and AWS. “Today, many customers are running applications on the …",
                  tags: "aws;getenvoy;envoy;amazon-eks;amazon-app-mesh",
                  url:
                    "https://www.tetrate.io/blog/appmesh-tetrate-integration/"
                },
                {
                  infotype: "Other Info",
                  infoid: "40",
                  title:
                    "Press Release Tetrate Works With Amazon Web Services to Bring Enterprise Grade Envoy to Aws App Mesh Users",
                  subgenre: "Press Release",
                  overview:
                    "Support for AWS App Mesh will be showcased for the first time at ​Service Mesh Day on March 29, 2019 in San Francisco SAN FRANCISCO – March 27, 2019 – Tetrate​, the ​recently launched​ enterprise service mesh company, today announced its support for the launch of Amazon Web Services (AWS) App Mesh, a cloud service that makes it easy to run microservices by …",
                  tags: "company-news;envoy;getenvoy;amazon-app-mesh;aws",
                  url:
                    "https://www.tetrate.io/blog/press-release-tetrate-works-with-amazon-web-services-to-bring-enterprise-grade-envoy-to-aws-app-mesh-users/"
                },
                {
                  infotype: "Other Info",
                  infoid: "42",
                  title: "Press Release - Service Mesh Day 2019",
                  subgenre: "Press Release",
                  overview:
                    "Tetrate Hosts First-Ever Service Mesh Industry Conference with Service Mesh Day 2019 Creators of Istio and Envoy Headline Event on March 28 and 29 in San Francisco Exploring Application of Service Mesh to Accelerate Digital Transformation SAN FRANCISCO – March 19, 2019 – Tetrate, the enterprise service mesh company, is proud to announce details of Service …",
                  tags: "company-news;event;service-mesh;istio;envoy",
                  url:
                    "https://www.tetrate.io/blog/press-release-service-mesh-day-2019/"
                },
                {
                  infotype: "Other Info",
                  infoid: "43",
                  title: "Press Release – Tetrate Launch",
                  subgenre: "Press Release",
                  overview:
                    "Key Contributors of Envoy and Istio Projects Launch Tetrate with $12.5M in Funding to Create Enterprise-Grade Service Mesh SAN FRANCISCO – March 13, 2019 – Tetrate, the enterprise service mesh company, today launched with $12.5M in funding, led by Dell Technologies Capital with participation from 8VC, Intel Capital, Rain Capital and Samsung NEXT. The funding …",
                  tags: "company-news;envoy;istio",
                  url: "https://www.tetrate.io/blog/press-release/"
                }
              ]
            },
            {
              infotype: "Talk Videos",
              info: []
            },
            {
              infotype: "How To",
              info: []
            },
            {
              infotype: "Other Info",
              info: []
            }
          ]
        },
        {
          diagid: "L1-A",
          nodeid: 19,
          nodetype: "Component",
          caption: "Ingress",
          overview: "",
          tags: "",
          infotypes: []
        },
        {
          diagid: "L1-A",
          nodeid: 20,
          nodetype: "Component",
          caption: "Egress",
          overview: "",
          tags: "",
          infotypes: []
        },
        {
          diagid: "L1-A",
          nodeid: 21,
          nodetype: "Level Counter",
          caption: "Increase Level",
          overview: "",
          tags: "",
          infotypes: []
        }
      ]
    },
    {
      diagramid: "L1-M",
      title: "Level 1 - Management Plane",
      overview: "",
      objects: [
        {
          diagid: "L1-M",
          nodeid: 22,
          nodetype: "Component",
          caption: "TSB UI",
          overview: "",
          tags: ""
        },
        {
          diagid: "L1-M",
          nodeid: 23,
          nodetype: "Component",
          caption: "Workflow Server",
          overview: "",
          tags: "",
          infotypes: []
        },
        {
          diagid: "L1-M",
          nodeid: 24,
          nodetype: "Component",
          caption: "API Server",
          overview: "",
          tags: "",
          infotypes: []
        },
        {
          diagid: "L1-M",
          nodeid: 25,
          nodetype: "Component",
          caption: "SkyWalking",
          overview: "",
          tags: "skywalking;apache-skywalking",
          infotypes: [
            {
              infotype: "How To",
              info: [
                {
                  infotype: "How To",
                  infoid: "18",
                  title:
                    "3x Performance Improvement in SkyWalking’s recent 6.1 release",
                  subgenre: "Tech Overview",
                  overview:
                    "Apache SkyWalking, the observability analysis and application performance monitoring (APM) tool, shattered its own performance record with its recent 6.1 release. Designed especially for microservices, cloud native and container based architecture, SkyWalking provides distributed tracing, service mesh telemetry analysis, metric aggregation and workload …",
                  tags:
                    "skywalking;apache-skywalking;cloudnative;microservices;telemetry",
                  url: "https://www.tetrate.io/blog/skywalking-performance/"
                },
                {
                  infotype: "How To",
                  infoid: "32",
                  title: "The New Stack Features Apache SkyWalking",
                  subgenre: "Tech Overview",
                  overview:
                    "Apache SkyWalking, the open source APM that Tetrate has embraced as the path to observability, was featured yestreday by the New Stack, the podcast and DevOps tech blog. In “SkyWalking: APM for the Heterogeneous New Stack,” Susan Hall describes SkyWalking founder Sheng Wu– who is now a Tetrate engineer– grew SkyWalking in just four years from a …",
                  tags: "skywalking;apache-skywalking;devops",
                  url:
                    "https://www.tetrate.io/blog/new-stack-features-skywalking/"
                },
                {
                  infotype: "How To",
                  infoid: "35",
                  title: "SkyWalking Graduates as an Apache Top Level Project",
                  subgenre: "Tech Overview",
                  overview:
                    "Tetrate congratulates its own Sheng Wu, founder of SkyWalking Apache SkyWalking, the observability analysis and application performance monitoring (APM) tool built especially for microservices, cloud-native and container-based architectures, has graduated as an Apache Top Level Project. Founded by Tetrate’s Sheng Wu, SkyWalking was originally created as an …",
                  tags: "skywalking;apache-skywalking",
                  url:
                    "https://www.tetrate.io/blog/skywalking-graduates-as-top-level-project/"
                },
                {
                  infotype: "How To",
                  infoid: "45",
                  title: "SkyWalking V6 Is Service Mesh Ready",
                  subgenre: "Tech Overview",
                  overview:
                    "Context: The integration of SkyWalking and Istio Service Mesh yields an essential open-source tool for resolving the chaos created by the proliferation of siloed, cloud-based services. Apache SkyWalking is an open, modern performance management tool for distributed services, designed especially for microservices, cloud native and container-based (Docker, K8s, …",
                  tags:
                    "skywalking;service-mesh;istio;apache-skywalking;microservices;cloudnative",
                  url:
                    "https://www.tetrate.io/blog/skywalking-v6-is-service-mesh-ready/"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      diagramid: "L1-C",
      title: "Level 1 - Control Plane",
      overview: "",
      objects: [
        {
          diagid: "L1-C",
          nodeid: 26,
          nodetype: "Component",
          caption: "TSB D",
          overview: "",
          tags: ""
        },
        {
          diagid: "L1-C",
          nodeid: 27,
          nodetype: "Component",
          caption: "Galley",
          overview: "",
          tags: "",
          infotypes: []
        },
        {
          diagid: "L1-C",
          nodeid: 28,
          nodetype: "Component",
          caption: "Pilot",
          overview: "",
          tags: "",
          infotypes: []
        },
        {
          diagid: "L1-C",
          nodeid: 29,
          nodetype: "Component",
          caption: "Citadel",
          overview: "",
          tags: "",
          infotypes: []
        },
        {
          diagid: "L1-C",
          nodeid: 30,
          nodetype: "Component",
          caption: "SkyWalking",
          overview: "",
          tags: "skywalking;apache-skywalking",
          infotypes: [
            {
              infotype: "How To",
              info: [
                {
                  infotype: "How To",
                  infoid: "18",
                  title:
                    "3x Performance Improvement in SkyWalking’s recent 6.1 release",
                  subgenre: "Tech Overview",
                  overview:
                    "Apache SkyWalking, the observability analysis and application performance monitoring (APM) tool, shattered its own performance record with its recent 6.1 release. Designed especially for microservices, cloud native and container based architecture, SkyWalking provides distributed tracing, service mesh telemetry analysis, metric aggregation and workload …",
                  tags:
                    "skywalking;apache-skywalking;cloudnative;microservices;telemetry",
                  url: "https://www.tetrate.io/blog/skywalking-performance/"
                },
                {
                  infotype: "How To",
                  infoid: "32",
                  title: "The New Stack Features Apache SkyWalking",
                  subgenre: "Tech Overview",
                  overview:
                    "Apache SkyWalking, the open source APM that Tetrate has embraced as the path to observability, was featured yestreday by the New Stack, the podcast and DevOps tech blog. In “SkyWalking: APM for the Heterogeneous New Stack,” Susan Hall describes SkyWalking founder Sheng Wu– who is now a Tetrate engineer– grew SkyWalking in just four years from a …",
                  tags: "skywalking;apache-skywalking;devops",
                  url:
                    "https://www.tetrate.io/blog/new-stack-features-skywalking/"
                },
                {
                  infotype: "How To",
                  infoid: "35",
                  title: "SkyWalking Graduates as an Apache Top Level Project",
                  subgenre: "Tech Overview",
                  overview:
                    "Tetrate congratulates its own Sheng Wu, founder of SkyWalking Apache SkyWalking, the observability analysis and application performance monitoring (APM) tool built especially for microservices, cloud-native and container-based architectures, has graduated as an Apache Top Level Project. Founded by Tetrate’s Sheng Wu, SkyWalking was originally created as an …",
                  tags: "skywalking;apache-skywalking",
                  url:
                    "https://www.tetrate.io/blog/skywalking-graduates-as-top-level-project/"
                },
                {
                  infotype: "How To",
                  infoid: "45",
                  title: "SkyWalking V6 Is Service Mesh Ready",
                  subgenre: "Tech Overview",
                  overview:
                    "Context: The integration of SkyWalking and Istio Service Mesh yields an essential open-source tool for resolving the chaos created by the proliferation of siloed, cloud-based services. Apache SkyWalking is an open, modern performance management tool for distributed services, designed especially for microservices, cloud native and container-based (Docker, K8s, …",
                  tags:
                    "skywalking;service-mesh;istio;apache-skywalking;microservices;cloudnative",
                  url:
                    "https://www.tetrate.io/blog/skywalking-v6-is-service-mesh-ready/"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      diagramid: "L1-D",
      title: "Level 1 - Data Plane",
      overview: "",
      objects: [
        {
          diagid: "L1-D",
          nodeid: 31,
          nodetype: "Component",
          caption: "Envoy-Loadbalancer",
          overview: "",
          tags: "get-envoy;envoy"
        },
        {
          diagid: "L1-D",
          nodeid: 32,
          nodetype: "Component",
          caption: "Envoy-Proxy",
          overview: "",
          tags: "get-envoy;envoy;proxy",
          infotypes: [
            {
              infotype: "Events",
              info: [
                {
                  infotype: "Events",
                  infoid: "9",
                  title: "Tetrate at KubeCon San Diego",
                  subgenre: "Event Summary",
                  overview:
                    "Going to KubeCon San Diego? Visit us at Booth SE65. KubeCon is just 2 weeks away, and Tetrate is excited to be sending our engineers, including top Istio and Envoy contributors. Look for the newly released Istio roadmap, Istio Up and Running, by Lee Calcote and our own Zack Butcher. And stop by and ask us anything about bridging legacy with cloud native. …",
                  tags: "event;istio;envoy;kubecon",
                  url: "https://www.tetrate.io/blog/kubeconsd/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "27",
                  title:
                    "Matt Klein at Tetrate's Service Mesh Day 2019: Envoy as the standard data plane and where it's going",
                  subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                  overview:
                    "Matt Klein, the creator of Envoy, says he had greatly underestimated the market demand for a proxy that could be used in a generic way. The Lyft software engineer wrote Envoy as a “communication bus” to handle issues like rate limiting, circuit breaking, and load balancing. It facilitates network-transparent applications and allows developers to focus on …",
                  tags: "event;alk-videos;envoy",
                  url: "https://www.tetrate.io/blog/smd_matt_klein/"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "52",
                  title: "Matt Klein at Service Mesh Day",
                  subgenre: "",
                  overview:
                    "Envoy creator Matt Klein (Lyft) advises organizations starting with service mesh to make changes incrementally, to solve problems one piece at a time.",
                  tags: "event;talk-videos;service-mesh;envoy",
                  url:
                    "https://www.youtube.com/watch?v=Lo-6x6NbUVI&feature=youtu.be"
                },
                {
                  infotype: "Talk Videos",
                  infoid: "63",
                  title: "Latency Analysis with Istio & OpenCensus",
                  subgenre: "",
                  overview:
                    "Learn how to do latency and hotspot analysis in a microservices environment with Istio and Envoy integrated with OpenCensus.",
                  tags: "event;talk-videos;microservices;istio;envoy",
                  url:
                    "https://www.youtube.com/watch?v=ME-EhOKqFOY&feature=youtu.be"
                },
                {
                  infotype: "How To",
                  infoid: "11",
                  title: "Announcing GetEnvoy",
                  subgenre: "Tech Overview",
                  overview:
                    "Why Envoy Proxy If you’re running a large, distributed architecture, you’ve probably heard of Envoy, if not pored over its features for controlling, securing and monitoring a system with unwieldy, heterogeneous components. A quick walkthrough, if you haven’t: Originally built at Lyft, Envoy is an open source, edge and service proxy that abstracts the …",
                  tags: "getenvoy;envoy;proxy",
                  url:
                    "https://www.tetrate.io/blog/announcing-the-getenvoy-project/"
                },
                {
                  infotype: "How To",
                  infoid: "15",
                  title: "The Basics of Envoy and Envoy Extensibility",
                  subgenre: "Tech Overview",
                  overview:
                    "In his 2019 talks at KubeCon Barcelona, Tetrate Engineer and Envoy Senior Maintainer Lizan Zhou presented an overview of Envoy and a deep dive into its extensibility. The service proxy solves a host of operational problems related to observability and networking in large distributed systems, and its extensibility allows it to be adapted to a large variety of …",
                  tags: "kubecon;envoy",
                  url:
                    "https://www.tetrate.io/blog/envoybasicsandextensibility/"
                },
                {
                  infotype: "How To",
                  infoid: "36",
                  title: "Envoy CVE security fixes for GetEnvoy",
                  subgenre: "Tech Overview",
                  overview:
                    "The Envoy security team today [announced]() the availability of Envoy 1.9.1 to address two high-risk vulnerabilities related to header values and HTTP URL paths. We also released the GetEnvoy build of Envoy 1.9.1 and the latest master build that fixes the vulnerability. Users are encouraged to upgrade to 1.9.1 or latest master build to address the following …",
                  tags: "getenvoy;envoy",
                  url:
                    "https://www.tetrate.io/blog/security-fixes-for-getenvoy/"
                },
                {
                  infotype: "Other Info",
                  infoid: "39",
                  title:
                    "Announcing AWS-Tetrate partnership to bring enterprise grade Envoy to App Mesh users",
                  subgenre: "Press Release",
                  overview:
                    "Today we announced an exciting partnership with AWS AppMesh. Tetrate GetEnvoy, which provides certified builds of Envoy, can now be used by customers of AWS App Mesh with EC2, ECS and EKS. This enables customers to have one set of verified and approved builds of Envoy across their data center and AWS. “Today, many customers are running applications on the …",
                  tags: "aws;getenvoy;envoy;amazon-eks;amazon-app-mesh",
                  url:
                    "https://www.tetrate.io/blog/appmesh-tetrate-integration/"
                },
                {
                  infotype: "Other Info",
                  infoid: "40",
                  title:
                    "Press Release Tetrate Works With Amazon Web Services to Bring Enterprise Grade Envoy to Aws App Mesh Users",
                  subgenre: "Press Release",
                  overview:
                    "Support for AWS App Mesh will be showcased for the first time at ​Service Mesh Day on March 29, 2019 in San Francisco SAN FRANCISCO – March 27, 2019 – Tetrate​, the ​recently launched​ enterprise service mesh company, today announced its support for the launch of Amazon Web Services (AWS) App Mesh, a cloud service that makes it easy to run microservices by …",
                  tags: "company-news;envoy;getenvoy;amazon-app-mesh;aws",
                  url:
                    "https://www.tetrate.io/blog/press-release-tetrate-works-with-amazon-web-services-to-bring-enterprise-grade-envoy-to-aws-app-mesh-users/"
                },
                {
                  infotype: "Other Info",
                  infoid: "42",
                  title: "Press Release - Service Mesh Day 2019",
                  subgenre: "Press Release",
                  overview:
                    "Tetrate Hosts First-Ever Service Mesh Industry Conference with Service Mesh Day 2019 Creators of Istio and Envoy Headline Event on March 28 and 29 in San Francisco Exploring Application of Service Mesh to Accelerate Digital Transformation SAN FRANCISCO – March 19, 2019 – Tetrate, the enterprise service mesh company, is proud to announce details of Service …",
                  tags: "company-news;event;service-mesh;istio;envoy",
                  url:
                    "https://www.tetrate.io/blog/press-release-service-mesh-day-2019/"
                },
                {
                  infotype: "Other Info",
                  infoid: "43",
                  title: "Press Release – Tetrate Launch",
                  subgenre: "Press Release",
                  overview:
                    "Key Contributors of Envoy and Istio Projects Launch Tetrate with $12.5M in Funding to Create Enterprise-Grade Service Mesh SAN FRANCISCO – March 13, 2019 – Tetrate, the enterprise service mesh company, today launched with $12.5M in funding, led by Dell Technologies Capital with participation from 8VC, Intel Capital, Rain Capital and Samsung NEXT. The funding …",
                  tags: "company-news;envoy;istio",
                  url: "https://www.tetrate.io/blog/press-release/"
                }
              ]
            },
            {
              infotype: "Talk Videos",
              info: []
            },
            {
              infotype: "How To",
              info: []
            },
            {
              infotype: "Other Info",
              info: []
            }
          ]
        },
        {
          diagid: "L1-D",
          nodeid: 33,
          nodetype: "Component",
          caption: "Ingress",
          overview: "",
          tags: "",
          infotypes: []
        },
        {
          diagid: "L1-D",
          nodeid: 34,
          nodetype: "Component",
          caption: "Egress",
          overview: "",
          tags: "",
          infotypes: []
        }
      ]
    }
  ]
};
