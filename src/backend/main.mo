import List "mo:core/List";
import Order "mo:core/Order";
import Array "mo:core/Array";

actor {
  type KayakDesign = {
    name : Text;
    manufacturer : Text;
    designYear : Nat;
    imageUrl : Text;
    externalLink : Text;
  };

  module KayakDesign {
    public func compareByYearDescending(a : KayakDesign, b : KayakDesign) : Order.Order {
      if (a.designYear > b.designYear) {
        #less;
      } else if (a.designYear < b.designYear) {
        #greater;
      } else {
        #equal;
      };
    };
  };

  var kayakDesigns = List.empty<KayakDesign>();

  public shared ({ caller }) func addKayakDesign(
    name : Text,
    manufacturer : Text,
    designYear : Nat,
    imageUrl : Text,
    externalLink : Text,
  ) : async () {
    let newKayak : KayakDesign = {
      name;
      manufacturer;
      designYear;
      imageUrl;
      externalLink;
    };
    kayakDesigns.add(newKayak);
  };

  public query ({ caller }) func getAllKayakDesigns() : async [KayakDesign] {
    kayakDesigns.toArray().sort(KayakDesign.compareByYearDescending);
  };
};
