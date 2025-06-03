{
  description = "My personal website/portfolio and blog";
  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

  outputs = inputs@{self, nixpkgs, ...}: let
    system = "x86_64-linux";
    pkgs = import nixpkgs {
      inherit system;
    };
  in {
    devShells = {
      x86_64-linux.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          git nodejs_24
        ];

        shellHook = ''
          npm install
        '';
      };
    };
  };
}
